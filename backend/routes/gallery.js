import { Router } from 'express'
import { getGallery, uploadImage, deleteImage, updateImage } from '../controllers/galleryController.js'
import upload from '../middleware/upload.js'

const router = Router()

router.get('/', getGallery)
router.post('/', upload.single('image'), uploadImage)
router.put('/:id', updateImage)
router.delete('/:id', deleteImage)

export default router
