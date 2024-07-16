const productModel = require('../models/productModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const generateToken = require('../utils/generateToken');



class APIfeatures{
    constructor(query,queryString){
        this.query = query,
        this.queryString = queryString
    }

    filtering(){
        const queryObj = {...this.queryString}
        const excludedFields = ['page','sort','limit'];
        excludedFields.forEach(function(el){
            delete queryObj[el];
        })

        let querystr = JSON.stringify(queryObj)
        querystr = querystr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(querystr))

        return this
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('')
            this.query.sort(sortBy)

            console.log(sortBy)
        }
        else{
            this.query = this.query.sort('-createdAt')
        }
        return this
    }

    pagination(){
        const page = this.queryString.page * 1 || 1;

        const limit = this.queryString.limit * 1 || 9;

        const skip = (page-1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}



module.exports.getProduct = async function(req,res,next){
    try{
        const features = new APIfeatures(productModel.find(),req.query).filtering().sorting().pagination();
        const products = await features.query
        res.json({products});
        // res.json({result: products.length});
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