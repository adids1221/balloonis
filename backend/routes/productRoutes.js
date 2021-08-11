import express from 'express'
const router = express.Router()
import { createProduct } from '../controllers/productController.js'

router.route('/')
    .get((req, res) => { res.send('PRODUCT') })
    .post(createProduct)

export default router