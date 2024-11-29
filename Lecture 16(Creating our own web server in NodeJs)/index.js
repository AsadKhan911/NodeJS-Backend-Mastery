//importing/requiring the built in node module
const http = require('http') 

//Now we will create a server by function provided by http module
const server = http.createServer((req,res) => {
    res.end("Hey this server is made by Asad Khan")
})

//The server.listen() method in Node.js makes your server start accepting requests on a chosen port and address."
server.listen(8000 , '127.0.0.1' , ()=>{
    console.log("Listening to the port no 8000")
})

/*THESE ARE THE THREE SIMPLE STEPS TO MAKE YOUR OWN SERVER.
1). Require the http module
2). Creating server with the help of it
3). Make the connection to listen to the requests by .listen() function
Now you can execute it by typing localhost:8000 on chrome and get the results.
*/

//'127.0.0.1' is the loopback address, also known as localhost. It means the server will only accept requests from the same machine it's running on.