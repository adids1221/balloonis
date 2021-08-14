const express = require('express')
const { Router } = require("express");
const router = Router();
const { createProduct, getProduct } = require('../controllers/productController')

router.route('/craete')
    .post(createProduct)

module.exports = router;