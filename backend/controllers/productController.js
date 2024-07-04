const productModel = require('../models/productModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const generateToken = require('../utils/generateToken');

module.exports.getProduct = async function(req,res,next){
    try{
        const products = await productModel.find();
        res.json(products);
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

module.exports.createProducts = async function(req,res,next){
    try{
        const { product_id, title, desc, price, content, images, category } = req.body;

        // if(!images) return res.status(400).json({msg: 'No image was provided'});

        const product = await productModel.findOne({product_id});

        if(product) return res.status(400).json({msg: "Product already exists"});

        const newProduct = new productModel({
            product_id,title: title.toLowerCase(), price, desc, content, images, category
        })

        await newProduct.save();
        res.json(newProduct);
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}

module.exports.deleteProducts = async function(req,res,next){
    try{
        let product = await productModel.findByIdAndDelete(req.params.id)
        res.json({msg: "Product deleted"})
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}


module.exports.updateProducts = async function(req,res,next){
    try{
        const { product_id, title, desc, price, content, images, category } = req.body;
        await productModel.findByIdAndUpdate({_id: req.params.id},{product_id, title, desc, price, content, images, category})

        res.json("Product information updated")
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}