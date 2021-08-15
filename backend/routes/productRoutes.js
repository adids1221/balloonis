const express = require('express')
const { Router } = require("express");
const router = Router();
const { protect, isAdmin } = require('../middleware/authMiddleware')
const { createProduct, getProduct } = require('../controllers/productController')

router.route('/create')
    .post(protect, isAdmin, createProduct)

module.exports = router;