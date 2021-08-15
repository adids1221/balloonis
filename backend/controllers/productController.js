const Sequelize = require("sequelize");
const { Product } = require("../models/products")
const { v4: uuidv4 } = require('uuid');
const AppError = require('../utils/appError');

/*const { username, password } = req.body
    const uuid = uuidv4()
    const salt = await bcrypt.genSalt(10)
    const bcryptPassword = await bcrypt.hash(password, salt);

    const user = await User.findAll({
        where: { user_name: username }
    })

    user.forEach(u => {
        if (u.user_name === username) {
            next(AppError.badRequest('User already exists'))
            return;
        }
    })

    await User.create({ id: uuid, user_name: username, password: bcryptPassword, is_admin: true })
        .then(res.status(201).send({ message: "User created" }))
        .catch((error) => {
            next(AppError.badRequest(error.message))
            return;
        }); */

const createProduct = async (req, res) => {
    console.log(req);
    // const { name, description, product_type, price } = req.body
    // const uuid = uuidv4()
    // await Product.create({
    //     id: uuid, name: name,
    //     description: description,
    //     product_type: product_type,
    //     price: price,
    //     image_name: originalname,
    //     image_path: path,
    //     image_data,
    //     image_type: mimetype
    // })
    //     .then(res.status(201).send({ message: "User created" }))
    //     .catch((error) => {
    //         next(AppError.badRequest(error.message))
    //         return;
    //     });
};

const getProduct = async (req, res) => {
    try {
        const { filename } = req.params;
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, 'images/' + filename);
        return res.sendFile(fullfilepath);
        // const product = await Product.findAll({
        //     where: {
        //         name: req.body.name
        //     }
        // });
        // return res.status(201).json({ product });
        // res.json('get product');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


exports.createProduct = createProduct
exports.getProduct = getProduct