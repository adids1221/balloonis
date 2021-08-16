const express = require('express')
const { Router } = require("express");
const router = Router();
const { protect, isAdmin } = require('../middleware/authMiddleware')
const { createCategory } = require('../controllers/categroiesController')

router.route('/create')
    .post(protect, isAdmin, createCategory)

module.exports = router;