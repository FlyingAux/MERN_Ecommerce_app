const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async function (req, res, next) {
    try {
        // Extract token from Authorization header
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(400).json({ msg: "Invalid Authorization header" });
        }

        const token = authHeader.split(' ')[1]; // Extract token part after 'Bearer'

        // Verify the token
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) {
                console.error('Token verification error:', err.message);
                return res.status(400).json({ msg: "Invalid token" });
            }

            req.user = user; // Attach user data to req
            console.log('Verified User:', user); // Debugging line
            next(); // Proceed to the next middleware or route handler
        });
    } catch (err) {
        console.error('Middleware error:', err.message);
        return res.status(500).json({ msg: err.message });
    }
};
