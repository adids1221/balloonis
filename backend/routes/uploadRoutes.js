import express from 'express'
import multer from "multer"
import path from 'path'
const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images/')
    },
    filename(req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        )
    },
})

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb('Images only!')
    }
}


const imageUpload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
})


//create new product
router.route('/')
    .post(imageUpload.array('image'), (req, res) => {
        var images = req.files
        images.forEach((image) => {
            console.log(image);
        })
        //console.log(req.files);
        res.json({
            // image_type: req.file.mimetype,
            // image_name: req.file.fieldname,
            // image_path: req.file.path,
            message: 'done'
        });
    })


export default router