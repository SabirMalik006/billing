import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { v2 as cloudinary } from 'cloudinary'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

// ── Models ──
const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'General' },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true })

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
}, { timestamps: true })

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  content: { type: String, required: true },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  active: { type: Boolean, default: true },
  approved: { type: Boolean, default: false },
  source: { type: String, enum: ['admin', 'user'], default: 'admin' },
  order: { type: Number, default: 0 },
}, { timestamps: true })

const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema)
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema)

// ── DB Connection (cached) ──
let cached = null
async function connectDB() {
  if (cached) return cached
  cached = await mongoose.connect(process.env.MONGODB_URI)
  console.log('MongoDB connected')
  return cached
}

// ── Cloudinary ──
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// ── Multer ──
const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: 'mbx-gallery', allowed_formats: ['jpg', 'jpeg', 'png', 'webp'], transformation: [{ width: 1200, height: 800, crop: 'limit' }] },
})
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } })

// ── Auth Middleware ──
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token' })
  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch { res.status(401).json({ error: 'Invalid token' }) }
}

// ── Express App ──
const app = express()
app.use(cors())
app.use(express.json())

// Health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// ── Auth Routes ──
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return res.json({ token, email, role: 'admin' })
  }
  res.status(401).json({ error: 'Invalid email or password' })
})

app.get('/api/auth/verify', auth, (req, res) => res.json({ valid: true, admin: req.admin }))

// ── Gallery Routes ──
app.get('/api/gallery', async (req, res) => {
  await connectDB()
  const images = await Gallery.find().sort({ order: 1, createdAt: -1 })
  res.json(images)
})

app.post('/api/gallery', upload.single('image'), async (req, res) => {
  await connectDB()
  if (!req.file) return res.status(400).json({ error: 'No image' })
  const image = await Gallery.create({ title: req.body.title || 'Untitled', category: req.body.category || 'General', url: req.file.path, publicId: req.file.filename })
  res.status(201).json(image)
})

app.put('/api/gallery/:id', async (req, res) => {
  await connectDB()
  const image = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(image)
})

app.delete('/api/gallery/:id', async (req, res) => {
  await connectDB()
  const image = await Gallery.findById(req.params.id)
  if (image) { await cloudinary.uploader.destroy(image.publicId); await Gallery.findByIdAndDelete(req.params.id) }
  res.json({ message: 'Deleted' })
})

// ── Contact Routes ──
app.post('/api/contact', async (req, res) => {
  await connectDB()
  const { name, phone, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message required' })
  const submission = await Contact.create({ name, phone, email, message })
  res.status(201).json(submission)
})

app.get('/api/contact', async (req, res) => {
  await connectDB()
  const contacts = await Contact.find().sort({ createdAt: -1 })
  res.json(contacts)
})

app.patch('/api/contact/:id', async (req, res) => {
  await connectDB()
  const submission = await Contact.findByIdAndUpdate(req.params.id, { read: true }, { new: true })
  res.json(submission)
})

app.delete('/api/contact/:id', async (req, res) => {
  await connectDB()
  await Contact.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
})

// ── Testimonial Routes ──
app.get('/api/testimonials', async (req, res) => {
  await connectDB()
  const testimonials = await Testimonial.find({ active: true, approved: true }).sort({ order: 1, createdAt: -1 })
  res.json(testimonials)
})

app.post('/api/testimonials/submit', async (req, res) => {
  await connectDB()
  const { name, role, content, rating } = req.body
  if (!name || !content) return res.status(400).json({ error: 'Name and review required' })
  await Testimonial.create({ name, role: role || '', content, rating: rating || 5, source: 'user', approved: false, active: true })
  res.status(201).json({ message: 'Review submitted. It will appear after approval.' })
})

app.get('/api/testimonials/all', async (req, res) => {
  await connectDB()
  const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 })
  res.json(testimonials)
})

app.post('/api/testimonials', async (req, res) => {
  await connectDB()
  const { name, role, content, rating } = req.body
  if (!name || !role || !content) return res.status(400).json({ error: 'Name, role and content required' })
  const testimonial = await Testimonial.create({ name, role, content, rating, source: 'admin', approved: true })
  res.status(201).json(testimonial)
})

app.put('/api/testimonials/:id', async (req, res) => {
  await connectDB()
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(testimonial)
})

app.delete('/api/testimonials/:id', async (req, res) => {
  await connectDB()
  await Testimonial.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
})

// ── Vercel Export ──
export default app
