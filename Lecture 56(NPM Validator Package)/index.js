const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/TestDB').then(()=>{
    console.log("CONNECTION SUCCESSFULL!")
}).catch((err)=>{
    console.log("ERROR IS"+err)
})

const testSchema = new mongoose.Schema({ //This is a instance not class thats why first letter is small of variable
    name:{
        type:String,
        required:true,
        isLowercase:true,
        trim:true,
    },
    class:Number,
    active:Boolean,
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is inValid")
            }
        },
        required:true,
        lowercase:true,
        unique:true
    }
})

//MODEL

const TestModel = new mongoose.model('TestModel' , testSchema)

const insertDoc = new TestModel({
    name:"Asad Waqar",
    class:1332,
    active:true,
    email:"ASAD@gmail.com"
})

insertDoc.save().then(()=>{
    console.log("SAVED SUCCESSFULLY")
}).catch((err)=>{
    console.log(err)
})