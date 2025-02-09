const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TestDB').then(()=>{
    console.log("CONNECTION SUCCESSFULL!")
}).catch((err)=>{
    console.log("ERROR IS"+err)
})

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

const readDocument = async () => {
    try{
    const result = await TestModel.find()
    console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

readDocument();

const readFilteredDoc = async () => {
    try{
    const result = await TestModel.find({name:"Hafeez"})
    console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

readFilteredDoc();

const readFilteredParamDoc = async () => {
    try{
    const result = await TestModel.find({name:"Hafeez"}).select({name:1})
    console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

readFilteredParamDoc();
