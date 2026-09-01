import Gallery from '../models/Gallery.js'
import { v2 as cloudinary } from 'cloudinary'

export const getGallery = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ order: 1, createdAt: -1 })
    res.json(images)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const uploadImage = async (req, res) => {
  try {
    const { title, category } = req.body
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' })

    const image = await Gallery.create({
      title: title || 'Untitled',
      category: category || 'General',
      url: req.file.path,
      publicId: req.file.filename,
    })
    res.status(201).json(image)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id)
    if (!image) return res.status(404).json({ error: 'Not found' })

    await cloudinary.uploader.destroy(image.publicId)
    await Gallery.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateImage = async (req, res) => {
  try {
    const { title, category, order } = req.body
    const image = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, category, order },
      { new: true }
    )
    res.json(image)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
