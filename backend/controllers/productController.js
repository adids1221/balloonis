const Sequelize = require("sequelize");
const { Product } = require("../models/products")

const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            product_type: req.body.product_type,
            imageType: req.file.mimetype,
            imageName: req.file.originalname,
            imageData: req.file.buffer
        });
        console.log(req.file);
        res.json('create product');
        //return res.status(201).json({ message: "SP" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
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