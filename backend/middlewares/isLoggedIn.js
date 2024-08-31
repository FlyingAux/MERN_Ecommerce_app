const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async function (req, res, next) {
    try{
        const token = req.header("Authorization")

        if(!token) return res.status(400).json({msg: "Invalid Authorization"})

            jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
                if(err) return res.status(400).json({msg: "Invalid"})

                    req.user = user
                    console.log(user)
                    next();
            })
    }   
    catch(err){
        return res.status(500).json({msg: err.message});
    }
};
