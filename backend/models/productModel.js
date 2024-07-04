const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: String,
        trim: true,
        requried: true
    },
    desc: {
        type: String,
        requried: true
    },
    content: {
        type: String,
        requried: true
    },
    images: {
        type: Object,
        requried: true
    },
    category: {
        type: String,
        requried: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    sold: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

module.exports = mongoose.model('product',productSchema);