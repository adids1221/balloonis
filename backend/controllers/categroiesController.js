const Sequelize = require("sequelize");
const { Type } = require("../models")
const AppError = require('../utils/appError');
const multer = require("multer")
// const path = require("path")
// const upload = multer({ dest: 'images/' })

const createCategory = async (req, res, next) => {
    const { name } = req.body;
    // const cat = await Type.findAll({})
    // console.log(Type.findAll({}));
    // cat.forEach(c => {
    //     if (c.name === name) {
    //         next(AppError.badRequest('Category already exists'))
    //         return;
    //     }
    // })

    await Type.create({ name: name })
        .then(res.status(201).send({ message: "Category created" }))
        .catch((error) => {
            next(AppError.badRequest(error.message))
            return;
        });
}

exports.createCategory = createCategory