import Testimonial from '../models/Testimonial.js'

// Public - only active + approved
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ active: true, approved: true }).sort({ order: 1, createdAt: -1 })
    res.json(testimonials)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Admin - all
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 })
    res.json(testimonials)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Public - user submit review
export const submitReview = async (req, res) => {
  try {
    const { name, role, content, rating } = req.body
    if (!name || !content) {
      return res.status(400).json({ error: 'Name and review are required' })
    }
    const testimonial = await Testimonial.create({
      name,
      role: role || '',
      content,
      rating: rating || 5,
      source: 'user',
      approved: false,
      active: true,
    })
    res.status(201).json({ message: 'Review submitted successfully. It will appear after approval.' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Admin - create
export const createTestimonial = async (req, res) => {
  try {
    const { name, role, content, rating } = req.body
    if (!name || !role || !content) {
      return res.status(400).json({ error: 'Name, role and content are required' })
    }
    const testimonial = await Testimonial.create({ name, role, content, rating, source: 'admin', approved: true })
    res.status(201).json(testimonial)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(testimonial)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
