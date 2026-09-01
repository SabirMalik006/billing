import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, default: 5, min: 1, max: 5 },
  active: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.model('Testimonial', testimonialSchema)
