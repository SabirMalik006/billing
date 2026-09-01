import { Router } from 'express'
import { submitContact, getContacts, markRead, deleteContact } from '../controllers/contactController.js'

const router = Router()

router.post('/', submitContact)
router.get('/', getContacts)
router.patch('/:id', markRead)
router.delete('/:id', deleteContact)

export default router
