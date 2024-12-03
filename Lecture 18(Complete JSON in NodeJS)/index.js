const fs = require('fs')

const myObj = {
    name : 'Asad',
    age : 24,
    occupation : 'Student',
    }

console.log(myObj.name)
console.log(myObj.age)
console.log(myObj.occupation) //We can simple call object keys or properties like this

//How to change object to JSON?

const jsonData = JSON.stringify(myObj)
console.log(jsonData)

//How to change JSON into object?

const objAgain = JSON.parse(jsonData)
console.log(objAgain)

//Using file system module with JSON.

/*Tasks
1). Convert object to JSON
2). Add this converted JSON to a new file by first making the file
3). Read the file
4). Again convert JSON back to object*/ 

const newObj = {
    class : 'SE',
    strength : 50,
    classHours : 4,
}

let newJSON = JSON.stringify(newObj)

fs.writeFile("myJson.json" , newJSON , (err)=>{
    if(err){
        console.log("some error occoured" , err)
    }
    else{
        console.log("done")
    }
})

fs.readFile('myJson.json' , 'utf-8' , (err , data)=>{
    if(err){
        console.log("some error occoured" , err)
    }
    else{
        console.log(data)
        //coverting to object
        let objConvert = JSON.parse(newJSON)
        console.log(objConvert)
    }
})


