const catModel = require('../models/catModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const generateToken = require('../utils/generateToken');

module.exports.getCategory = async function(req,res,next){
    try{
        const category = await catModel.find();
        res.json(category)
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

module.exports.createCategory = async function(req,res,next){
    try{
        const {name} = req.body
        const category = await catModel.findOne({name})
        if(category) return res.status(400).json({msg: "category already exists"})

            const newCategory = new catModel({name});

        res.send('category created')
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

module.exports.createCategory = function(req,res,next){

}