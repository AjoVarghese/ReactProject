const asynchandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const user = require('../Models/userSchema')
require('dotenv').config()

const protect = asynchandler(async(req,res,next) => {
    let token
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
        )
        {
            try {
                let token = req.headers.authorization.split(" ")[1]
                console.log("TOKEN" + token);
                const decoded = jwt.verify(token,process.env.TOKEN_CODE)
                // req.user = await user.findById(decoded.id).select("-password")
                // console.log("Valid Token ");
                next()
            } catch (error) {
                res.status(400).json("TOKEN INVALID")
            } 

        }

        if(!token){
            res.status(401).json("TOKEN NOT FOUND")

        }
})

module.exports = {protect}