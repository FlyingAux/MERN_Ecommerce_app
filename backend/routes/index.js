const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logout, getUser } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/',function(req,res){
    res.send('Welcome & Hello!');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logout);

router.get('/user',isLoggedIn,getUser)


module.exports = router;