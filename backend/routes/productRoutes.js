import express from 'express'
const router = express.Router()
import { createProduct, getProduct } from '../controllers/productController.js'

router.route('/craete')
    .post(createProduct)

export default router