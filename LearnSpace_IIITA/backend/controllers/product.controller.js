// controllers/product.controller.js

import { Product } from '../models/product.model.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const uploads = multer({ storage });

// Controller to add a new product
// export const addProduct = async (req, res) => {
//     try {
//         const { productName, companyName, originalPrice, sellingPrice } = req.body;
//         const image = `http://localhost:5000/uploads/${req.file.filename}`;

//         const product = new Product({
//             productName,
//             companyName,
//             originalPrice,
//             sellingPrice,
//             image,
//         });

//         await product.save();
//         res.status(201).json({ success: true, product });
//     } catch (error) {
//         console.error("Error adding product:", error);
//         res.status(400).json({ success: false, message: error.message });
//     }
// };

// controllers/product.controller.js
export const addProduct = async (req, res) => {
    try {
        const { 
            productName, 
            companyName, 
            originalPrice, 
            sellingPrice, 
            sellerName, 
            sellerPhone, 
            sellerEmail, 
            hostelName, 
            roomNo 
        } = req.body;

        const image = `http://localhost:5000/uploads/${req.file.filename}`;

        const product = new Product({
            productName,
            companyName,
            originalPrice,
            sellingPrice,
            image,
            sellerName,      // Save seller info
            sellerPhone,     // Save seller info
            sellerEmail,     // Save seller info
            hostelName,      // Save hostel info
            roomNo,          // Save room info
        });

        await product.save();
        res.status(201).json({ success: true, product });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(400).json({ success: false, message: error.message });
    }
};

// Controller to fetch all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller to delete a product by ID
export const deleteProduct = async (req, res) => {
    const { id } = req.params; // Get product ID from request parameters

    try {
        // Find and delete the product by its ID
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// New controller to search for products
// export const searchProducts = async (req, res) => {
//     try {
//         const { query } = req.query;
//         if (!query) {
//             return res.status(400).json({ success: false, message: 'Query is required' });
//         }
//         const regex = new RegExp(query, 'i'); // Create a regex for case-insensitive search
//         const products = await Product.find({
//             $or: [
//                 { productName: regex },
//                 { companyName: regex }
//             ]
//         });
//         res.status(200).json({ success: true, products });
//     } catch (error) {
//         console.error("Error searching products:", error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

export { uploads }; // Export multer upload middleware
