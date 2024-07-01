const userModel = require('../models/userModel');

module.exports = async(req,res,next)=>{
    try{
        const user = await userModel.findOne({
            _id: req.user._id
        })
        console.log(user)
        if(user.role != 1){
            return res.status(400).json({msg: 'Admin resource access Denied'});
        }
        else{
            next()
        }
        
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}