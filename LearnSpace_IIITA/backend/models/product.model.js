// // models/product.model.js

// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     productName: {
//         type: String,
//         required: true,
//     },
//     companyName: {
//         type: String,
//         required: true,
//     },
//     originalPrice: {
//         type: Number,
//         required: true,
//     },
//     sellingPrice: {
//         type: Number,
//         required: true,
//     },
//     image: {
//         type: String, // Path to the uploaded image
//         required: true,
//     },
// }, { timestamps: true });

// export const Product = mongoose.model('Product', productSchema);


// models/product.model.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    originalPrice: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // Path to the uploaded image
        required: true,
    },
    sellerName: {
        type: String,
        required: true,
    },
    sellerPhone: {
        type: String,
        required: true,
    },
    sellerEmail: {
        type: String,
        required: true,
    },
    hostelName: {
        type: String,
        required: true,
    },
    roomNo: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
