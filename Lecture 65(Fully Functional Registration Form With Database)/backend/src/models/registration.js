require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Schema
const regSchema = mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone : {
        type:Number,
        required:true,
        unique:true
    },
    age: {
        type:Number,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

//Schema instance method
regSchema.methods.generateToken = async function () {
    try {
        const token = await jwt.sign({_id:this._id} , process.env.SECRET_KEY) //key can be any random 32 bit key
        this.tokens = this.tokens.concat({token:token}) //this.token ko equal krdo this.token k andr ek object dal k jo k token:token ho , concat new array return krta h
        await this.save() //saving in DB
        return token
    } catch (error) {
        res.send("Catch error")
    }
}

//Middleware for password hashing
regSchema.pre('save' , async function(){
    if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password , 10)
    this.confirmpassword = await bcrypt.hash(this.confirmpassword , 10)
    }
})

//Model
const RegModel = mongoose.model('Registartion' , regSchema)

module.exports = RegModel;