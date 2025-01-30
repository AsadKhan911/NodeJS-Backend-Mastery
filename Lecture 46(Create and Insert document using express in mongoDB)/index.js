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
    class:{
        Number
    },
    active:{
        Boolean
    }
    ,
    email:{
        String
    }
})

//MODEL

const TestModel = new mongoose.model('TestModel' , testSchema) //first parameter is model name(collection name) , second is schema jo uske lie banaya h. 

// const firstDocument = new TestModel({
//     name:"AsadKhan",
//     class:12,
//     active:true,
//     email:"asadlinkinpark9@gmail.com"
// })

// firstDocument.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// const secondDocument = new TestModel({
//     name:9,
//     class:"12",
//     active:true,
//     email:"ahmed@gmail.com"
// })

// secondDocument.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// //OR
// secondDocument.save((err,res)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }
// })

//Insert Many Documents in one go

const oneDocument = new TestModel({
    name:"Ali",
    class:12,
    active:true,
    email:"alil9@gmail.com"
})
const twoDocument = new TestModel({
    name:"Afzal",
    class:12,
    active:true,
    email:"afzal@gmail.com"
})
const thirdDocument = new TestModel({
    name:"Hafeez",
    class:12,
    active:true,
    email:"hafeez9@gmail.com"
})
const fourthDocument = new TestModel({
    name:"Adil",
    class:12,
    active:true,
    email:"alil9@gmail.com"
})

TestModel.insertMany([oneDocument, twoDocument, thirdDocument, fourthDocument]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
