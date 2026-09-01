import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import configureCloudinary from './config/cloudinary.js'
import galleryRoutes from './routes/gallery.js'
import contactRoutes from './routes/contact.js'
import testimonialRoutes from './routes/testimonial.js'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to DB & Cloudinary
connectDB()
configureCloudinary()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/testimonials', testimonialRoutes)

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
