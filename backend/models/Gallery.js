import mongoose from 'mongoose'

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'General' },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.model('Gallery', gallerySchema)
