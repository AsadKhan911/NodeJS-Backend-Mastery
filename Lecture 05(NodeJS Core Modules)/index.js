const fs = require('fs')

//Creating and writing in a file
fs.writeFileSync('read.txt' , "Welcome to the 5th lecture, additional content after creating file")

fs.appendFileSync('read.txt' , ' Appended Text addition')

//Node.js includes an additonal dataType called buffer
//(not available in javaScript)
//Buffer is mainly used to store binary data, 
//While reading from a file or recieving packets over the network
//When we read a file we will get the buffer data.

let buffer_data = fs.readFileSync('read.txt')
console.log(buffer_data)

//Converting buffer data to string
let str_data = buffer_data.toString()
console.log(str_data)

//Renaming the file
fs.renameSync('read.txt' , 'newName.txt')