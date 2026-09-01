import Contact from '../models/Contact.js'

export const submitContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' })
    }
    const submission = await Contact.create({ name, phone, email, message })
    res.status(201).json(submission)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getContacts = async (req, res) => {
  try {
    const submissions = await Contact.find().sort({ createdAt: -1 })
    res.json(submissions)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const markRead = async (req, res) => {
  try {
    const submission = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )
    res.json(submission)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
