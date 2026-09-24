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
  agencyName: { type: String, default: '' },
  patientName: { type: String, default: '' },
  specialty: { type: String, default: '' },
  ehrSoftware: { type: String, default: '' },
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

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, default: '', trim: true },
  content: { type: String, required: true },
  coverImage: { type: String, default: '' },
  coverPublicId: { type: String, default: '' },
  category: { type: String, default: 'General', trim: true },
  tags: { type: [String], default: [] },
  author: { type: String, default: 'MBX Solutions' },
  published: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
}, { timestamps: true })

// Auto-generate unique slug from title
blogSchema.pre('validate', function (next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 80) + '-' + Date.now().toString(36)
  }
  next()
})

const chatSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  visitorName: { type: String, default: 'Visitor' },
  lastMessage: { type: String, default: '' },
  lastMessageAt: { type: Date, default: Date.now },
  adminUnread: { type: Number, default: 0 },
  visitorUnread: { type: Number, default: 0 },
  status: { type: String, enum: ['waiting', 'active', 'ended'], default: 'waiting' },
}, { timestamps: true })

const chatMessageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  sender: { type: String, enum: ['visitor', 'admin'], required: true },
  text: { type: String, required: true, trim: true },
  read: { type: Boolean, default: false },
}, { timestamps: true })

const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema)
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema)
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
const ChatSession = mongoose.models.ChatSession || mongoose.model('ChatSession', chatSessionSchema)
const ChatMessage = mongoose.models.ChatMessage || mongoose.model('ChatMessage', chatMessageSchema)

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
  const { name, phone, email, agencyName, patientName, specialty, ehrSoftware, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message required' })
  const submission = await Contact.create({ name, phone, email, agencyName, patientName, specialty, ehrSoftware, message })
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

// ── Blog Routes ──

// Public - published posts only
app.get('/api/blog', async (req, res) => {
  await connectDB()
  try {
    const { category, search, limit } = req.query
    const query = { published: true }
    if (category && category !== 'All') query.category = category
    if (search) {
      const rx = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      query.$or = [{ title: rx }, { excerpt: rx }, { content: rx }, { tags: rx }]
    }
    let posts = Blog.find(query).sort({ createdAt: -1 })
    if (limit) posts = posts.limit(Number(limit))
    const data = await posts
    res.json(data)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Public - single post by slug
app.get('/api/blog/slug/:slug', async (req, res) => {
  await connectDB()
  try {
    const post = await Blog.findOne({ slug: req.params.slug, published: true })
    if (!post) return res.status(404).json({ error: 'Post not found' })
    post.views += 1
    await post.save()
    res.json(post)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Public - categories list
app.get('/api/blog/categories', async (req, res) => {
  await connectDB()
  try {
    const cats = await Blog.distinct('category', { published: true })
    res.json(cats)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - all posts (including drafts)
app.get('/api/blog/admin/all', auth, async (req, res) => {
  await connectDB()
  try {
    const posts = await Blog.find().sort({ createdAt: -1 })
    res.json(posts)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - single post by id (for editing)
app.get('/api/blog/admin/:id', auth, async (req, res) => {
  await connectDB()
  try {
    const post = await Blog.findById(req.params.id)
    if (!post) return res.status(404).json({ error: 'Post not found' })
    res.json(post)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - create (cover via image URL)
app.post('/api/blog', auth, async (req, res) => {
  await connectDB()
  try {
    const { title, excerpt, content, category, tags, author, published, coverImage } = req.body
    if (!title || !content) return res.status(400).json({ error: 'Title and content are required' })
    const post = await Blog.create({
      title,
      excerpt: excerpt || '',
      content,
      category: category || 'General',
      tags: tags ? String(tags).split(',').map(t => t.trim()).filter(Boolean) : [],
      author: author || 'MBX Solutions',
      published: published === 'true' || published === true,
      coverImage: coverImage || '',
      coverPublicId: '',
    })
    res.status(201).json(post)
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Slug already exists, try a different title' })
    res.status(500).json({ error: err.message })
  }
})

// Admin - update (cover via image URL)
app.put('/api/blog/:id', auth, async (req, res) => {
  await connectDB()
  try {
    const post = await Blog.findById(req.params.id)
    if (!post) return res.status(404).json({ error: 'Post not found' })
    const { title, excerpt, content, category, tags, author, published, coverImage } = req.body
    if (title !== undefined) post.title = title
    if (excerpt !== undefined) post.excerpt = excerpt
    if (content !== undefined) post.content = content
    if (category !== undefined) post.category = category
    if (tags !== undefined) post.tags = String(tags).split(',').map(t => t.trim()).filter(Boolean)
    if (author !== undefined) post.author = author
    if (published !== undefined) post.published = published === 'true' || published === true
    if (coverImage !== undefined) {
      // If old cover was a Cloudinary upload, clean it up
      if (post.coverPublicId && coverImage !== post.coverImage) {
        await cloudinary.uploader.destroy(post.coverPublicId).catch(() => {})
        post.coverPublicId = ''
      }
      post.coverImage = coverImage
    }
    await post.save()
    res.json(post)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - delete
app.delete('/api/blog/:id', auth, async (req, res) => {
  await connectDB()
  try {
    const post = await Blog.findById(req.params.id)
    if (post) {
      if (post.coverPublicId) await cloudinary.uploader.destroy(post.coverPublicId)
      await Blog.findByIdAndDelete(req.params.id)
    }
    res.json({ message: 'Deleted' })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Live Chat Routes ──

// Public - start/resume a chat session
app.post('/api/chat/start', async (req, res) => {
  await connectDB()
  try {
    const { sessionId, name } = req.body
    if (!sessionId) return res.status(400).json({ error: 'sessionId required' })
    let session = await ChatSession.findOne({ sessionId })
    if (!session) {
      session = await ChatSession.create({ sessionId, visitorName: name ? String(name).slice(0, 60) : 'Visitor' })
    } else if (name && session.visitorName === 'Visitor') {
      session.visitorName = String(name).slice(0, 60)
      await session.save()
    }
    res.json({ sessionId: session.sessionId, ok: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Public - visitor sends a message
app.post('/api/chat/:sessionId/messages', async (req, res) => {
  await connectDB()
  try {
    const sessionId = req.params.sessionId
    const text = String(req.body.text || '').trim().slice(0, 3000)
    if (!text) return res.status(400).json({ error: 'Message text required' })
    let session = await ChatSession.findOne({ sessionId })
    if (!session) session = await ChatSession.create({ sessionId, visitorName: String(req.body.name || 'Visitor').slice(0, 60) })
    session.lastMessage = text
    session.lastMessageAt = new Date()
    session.adminUnread = (session.adminUnread || 0) + 1
    if (session.status === 'waiting') session.status = 'active'
    await session.save()
    const msg = await ChatMessage.create({ sessionId, sender: 'visitor', text })
    res.status(201).json(msg)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Public - visitor polls for new messages (after = ISO timestamp)
app.get('/api/chat/:sessionId/messages', async (req, res) => {
  await connectDB()
  try {
    const sessionId = req.params.sessionId
    const after = req.query.after
    const query = { sessionId }
    if (after) query.createdAt = { $gt: new Date(after) }
    const messages = await ChatMessage.find(query).sort({ createdAt: 1 })
    res.json(messages)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Public - visitor marks admin messages as read
app.post('/api/chat/:sessionId/read', async (req, res) => {
  await connectDB()
  try {
    const sessionId = req.params.sessionId
    await ChatMessage.updateMany({ sessionId, sender: 'admin', read: false }, { $set: { read: true } })
    await ChatSession.findOneAndUpdate({ sessionId }, { $set: { visitorUnread: 0 } })
    res.json({ message: 'Read' })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - list all chat sessions (for alarm + list)
app.get('/api/chat/admin/conversations', auth, async (req, res) => {
  await connectDB()
  try {
    const sessions = await ChatSession.find().sort({ lastMessageAt: -1 })
    res.json(sessions)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - full message thread for a session
app.get('/api/chat/admin/:sessionId/messages', auth, async (req, res) => {
  await connectDB()
  try {
    const messages = await ChatMessage.find({ sessionId: req.params.sessionId }).sort({ createdAt: 1 })
    res.json(messages)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - admin replies
app.post('/api/chat/admin/:sessionId/messages', auth, async (req, res) => {
  await connectDB()
  try {
    const sessionId = req.params.sessionId
    const text = String(req.body.text || '').trim().slice(0, 3000)
    if (!text) return res.status(400).json({ error: 'Message text required' })
    const session = await ChatSession.findOne({ sessionId })
    if (!session) return res.status(404).json({ error: 'Session not found' })
    session.lastMessage = text
    session.lastMessageAt = new Date()
    session.visitorUnread = (session.visitorUnread || 0) + 1
    session.status = 'active'
    await session.save()
    const msg = await ChatMessage.create({ sessionId, sender: 'admin', text })
    res.status(201).json(msg)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// Admin - mark visitor messages read (clears alarm count)
app.post('/api/chat/admin/:sessionId/read', auth, async (req, res) => {
  await connectDB()
  try {
    const sessionId = req.params.sessionId
    await ChatMessage.updateMany({ sessionId, sender: 'visitor', read: false }, { $set: { read: true } })
    await ChatSession.findOneAndUpdate({ sessionId }, { $set: { adminUnread: 0 } })
    res.json({ message: 'Read' })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Vercel Export ──
export default app
