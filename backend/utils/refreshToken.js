const jwt = require('jsonwebtoken');
const refToken = function(newUser){
   console.log(newUser)
   return jwt.sign(newUser,process.env.REFRESH_TOKEN_SECRET,{expiresIn: '7d'});
}
module.exports = refToken;