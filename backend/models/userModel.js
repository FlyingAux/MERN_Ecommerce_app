const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }],
    role: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;