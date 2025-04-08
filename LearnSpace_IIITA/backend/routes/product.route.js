// // routes/product.route.js

// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { addProduct, getProducts,  } from '../controllers/product.controller.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import fs from 'fs';
// const uploadsDir = path.join(__dirname, '../uploads');
// if (!fs.existsSync(uploadsDir)) {
//     fs.mkdirSync(uploadsDir);
// }

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadsDir);
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// const router = express.Router();

// // Route to add a new product
// router.post('/', upload.single('image'), addProduct);

// // Route to fetch all products
// router.get('/', getProducts);

// // Route to search products
// // router.get('/search', searchProducts); // New route for searching products

// export default router;


// routes/product.route.js

import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { addProduct, getProducts, deleteProduct } from '../controllers/product.controller.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadsDir = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

// Route to add a new product
router.post('/', upload.single('image'), addProduct);

// Route to fetch all products
router.get('/', getProducts);

// Route to delete a product by ID
router.delete('/:id', deleteProduct); // New route to delete product by ID

export default router;
