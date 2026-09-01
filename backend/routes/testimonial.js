import { Router } from 'express'
import { getTestimonials, getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial, submitReview } from '../controllers/testimonialController.js'

const router = Router()

router.get('/', getTestimonials)              // public - approved only
router.post('/submit', submitReview)          // public - user review
router.get('/all', getAllTestimonials)         // admin - all
router.post('/', createTestimonial)           // admin
router.put('/:id', updateTestimonial)         // admin
router.delete('/:id', deleteTestimonial)      // admin

export default router
