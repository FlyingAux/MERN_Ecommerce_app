const jwt = require('jsonwebtoken');
const generateToke = function(newUser){
   console.log(newUser)
   return jwt.sign(newUser,process.env.JWT_KEY,{expiresIn: '1d'});
}
module.exports = generateToke;