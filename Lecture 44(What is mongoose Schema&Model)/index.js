const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TestDB').then(()=>{
    console.log("CONNECTION SUCCESSFULL!")
}).catch((err)=>{
    console.log("ERROR IS"+err)
})

//A mongoose schema defines the structure of the document(row).
//Can also add by default values , validators etc

const testSchema = new mongoose.Schema({ //This is a instance not class thats why first letter is small of variable
    name:{
        type:String,
        require:true
    },
    class:Number,
    active:Boolean,
    email:String
})

//MODEL

const TestModel = new mongoose.model('TestModel' , testSchema) //first parameter is model name(collection name) , second is schema jo uske lie banaya h. 