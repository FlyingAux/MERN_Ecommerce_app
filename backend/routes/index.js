const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logout, getUser, rfToken } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/',function(req,res){
    res.send('Welcome & Hello!');
});

router.post('/register', registerUser);

router.post('/rt', rfToken);

router.post('/login', loginUser);

router.get('/logout', logout);

router.get('/info',isLoggedIn, getUser);



module.exports = router;