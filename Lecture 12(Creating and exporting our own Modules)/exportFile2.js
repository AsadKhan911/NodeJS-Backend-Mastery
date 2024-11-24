//Add function
const add = ( a , b ) => {
    return a + b
}

//Subtract function
const sub = ( a , b ) => {
    return a - b
}

//Variable
let name = 'Asad'

module.exports.add1 = add //We will export multiple func or variables like this
module.exports.sub = sub //, after dot(.) the name can be changed but after equal(=) the function or variable name must be exact same as defined
module.exports.name = name //If you change the name before equals to eg:module.export.Asad = name then in index.js console.log(func.Asad) you must write like this
/*We can see the better approach by not exporting every function|var seperately we can export them in a 
single with the help of destructuring , we will write that code in destructuring.js file*/