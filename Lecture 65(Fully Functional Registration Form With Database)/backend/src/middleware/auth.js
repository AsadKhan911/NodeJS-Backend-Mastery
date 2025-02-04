const jwt = require('jsonwebtoken')
const RegModel = require('../models/registration')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; //As cookie parser is defined as a middleware in app.js no need to define it here, because if we define a middleware in app.js it works globally for all files
        const verify = await jwt.verify(token, process.env.SECRET_KEY) //jsonwebtoken in built function to verify tokens
        // console.log(verify)

        const user = await RegModel.findOne({_id:verify._id})
        console.log(user)

        req.token = token
        req.user = user
        
        next()

    } catch (error) {
        res.status(400).send("LOGIN AGAIN TO ACCESS THIS PAGE")
    }
}

module.exports = auth

//now this only function will be required all over the app to authenticate a user