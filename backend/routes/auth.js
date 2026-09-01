import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { auth } from '../middleware/auth.js'

const router = Router()

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )
    return res.json({ token, email, role: 'admin' })
  }

  res.status(401).json({ error: 'Invalid email or password' })
})

// Verify token
router.get('/verify', auth, (req, res) => {
  res.json({ valid: true, admin: req.admin })
})

export default router
