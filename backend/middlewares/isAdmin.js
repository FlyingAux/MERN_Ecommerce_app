const userModel = require('../models/userModel');

module.exports.isAdmin = async(req,res,next)=>{
    try{
        const user = await userModel.findOne({
            _id: req.user._id
        })
        if(user.role === 0)
            return res.status(400).json({msg: 'Admin resource access Denied'});
        
        next();
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}