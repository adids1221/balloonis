const { createProduct } = require('../controllers/productController')
const express = require('express')
const { Router } = require("express");
const router = Router();
const multer = require("multer")
const path = require("path")

const upload = multer({ dest: 'images/' })

router.route('/')
    .post(upload.array('images'))

module.exports = router;
// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//         cb(null, 'images/')
//     },
//     filename(req, file, cb) {
//         cb(
//             null,
//             `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//         )
//     },
// })

// function checkFileType(file, cb) {
//     const filetypes = /jpg|jpeg|png/
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
//     const mimetype = filetypes.test(file.mimetype)

//     if (extname && mimetype) {
//         return cb(null, true)
//     } else {
//         cb('Images only!')
//     }
// }


// const imageUpload = multer({
//     storage,
//     fileFilter: function (req, file, cb) {
//         checkFileType(file, cb)
//     },
// })


//create new product
