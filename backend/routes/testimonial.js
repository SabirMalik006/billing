import { Router } from 'express'
import { getTestimonials, getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../controllers/testimonialController.js'

const router = Router()

router.get('/', getTestimonials)        // public - only active
router.get('/all', getAllTestimonials)   // admin - all
router.post('/', createTestimonial)
router.put('/:id', updateTestimonial)
router.delete('/:id', deleteTestimonial)

export default router
