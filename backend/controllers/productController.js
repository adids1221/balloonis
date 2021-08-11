// import Product from '../models/products'

// export const createProduct = async (req, res) => {
//     try {
//         const product = await Product.create({
//             name: req.body.name,
//             price: req.body.price,
//             description: req.body.description,
//             product_type: req.body.product_type,
//             imageType: req.file.mimetype,
//             imageName: req.file.originalname,
//             imageData: req.file.buffer,
//         });
//         return res.status(201).json({ project });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

