const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const generateToken = require('../utils/generateToken');
const createrefreshToken = require('../utils/refreshToken');

module.exports.registerUser = async function(req,res,next){
    try{
        const { fullname, email, password } = req.body;
        const user = await userModel.findOne({email});
        if(user) return res.status(400).json({msg: "Email already registerd please login"});
         if(password.length < 6) return res.status(400).json({msg: "password should be altest of 6 chracters"});

        const pass = await bcrypt.hash(password, 10)

         const newUser = new userModel({fullname, email, password: pass});
         await newUser.save();

         const accessToken = generateToken({id: newUser._id})
         const refreshToken = createrefreshToken({id: newUser._id});

         res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            path: '/user/rt'
         });

         res.json({accessToken,refreshToken});
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

module.exports.rfToken = async function(req,res,next){
    try{
        const reftoken = req.cookies.refreshToken;
        console.log(reftoken)

        if(!reftoken) return res.status(400).json({msg: "please login or registers"});
    
        jwt.verify(reftoken,process.env.REFRESH_TOKEN_SECRET,function(err,user){
            if(err) return res.status(400).json({msg: 'verify issue'})
                const accessToken = generateToken({id: user.id})
            res.json({user,accessToken})
        })
    }
    catch(err){
        return res.status(500).json({msg: err.message});
    }
}


module.exports.loginUser = async function(req,res,next){
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({email})
        if(!user) return res.status(400).json({msg: "user does not exists"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg: "Incorrect Password"})
            
        const accessToken = generateToken({id: user._id})
        const refreshToken = createrefreshToken({id: user._id})
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/user/rt'
        })


        res.json({accessToken})
    }
    catch(err){
        return res.status(400).json({msg: err.message});
    }
}

module.exports.logout = function(req,res,next){
   try{
    res.clearCookie('refreshToken', {path:'/user/rt'});
    return res.json({msg: "Logged out"});
   }
   catch(err){
    return res.status(500).json({msg: err.message})
   }
};


module.exports.getUser = async (req,res,next)=>{
    try{
        const user = await userModel.findById(req.user.id).select("-password");
        console.log(req.user.id)

        if(!user) return res.status(400).json({msg: "User not found"})
            res.json(user)
    }
    catch(err){
        return res.status(400).json({msg: err.message})
    }
}