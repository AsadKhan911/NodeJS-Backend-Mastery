const fs = require('fs')

// Creating a new folder
fs.mkdir('Asad' , (err)=>{
    console.log(err)
})

// Create a file and write something in it in folder named 'Asad'
fs.writeFile('Asad/myFile.txt' , 'This is the content of myFile.txt' , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Task 1 completed")
    }
})

//Add more data into the file 
fs.appendFile('Asad/myFile.txt' , ' ,Appended data :)' , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Task 2 completed")
    }
})

//Read the file without getting the buffer data at first
fs.readFile('Asad/myFile.txt' , 'utf-8' , (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

// Rename the file name to mybio.txt
fs.rename('Asad/myFile.txt' , 'Asad/myBio.txt' , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Task 3 completed")
    }
})

// Delete both file and the folder
fs.unlink('Asad/myBio.txt' , (err)=>{ //deleting file
    if(err){
        console.log(err)
    }
    else{
        console.log("Task 4 completed")
    }
})

fs.rmdir('Asad' , (err)=>{ //deleting the directory
    if(err){
        console.log(err)
    }
    else{
        console.log("Task 5 completed")
    }
})

