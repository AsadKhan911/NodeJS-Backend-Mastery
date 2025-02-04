const mongoose = require('mongoose')

const menSchema = new mongoose.Schema({
    ranking: {
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true //Remove extra spaces
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m" //Because we are creating API for 100 meter race.
    }
})

//Creating a new collection
const MenRanking = new mongoose.model('MenRanking' , menSchema)

module.exports = MenRanking;