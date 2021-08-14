const express = require('express')
const { Router } = require("express");
const router = Router();
const { protect, isAdmin } = require('../middleware/authMiddleware')
const { authUser, registerUser } = require('../controllers/adminController')

router.route('/register')
    .post(protect, isAdmin, registerUser)

router.route('/login')
    .post(authUser)

module.exports = router;