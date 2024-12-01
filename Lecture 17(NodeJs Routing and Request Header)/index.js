const http = require('http') 

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end("Hey this is HOME page")
    }
    else if(req.url == '/about'){
        res.end("Hey this is ABOUT page")
    }
    else if(req.url == '/contact'){
        res.end("Hey this is CONTACT page")
    }
   else{
    res.writeHead(404 , {"CONTENT-TYPE" : "text/html"})
    res.end("ERROR  NOT FOUND!")
   }
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log("Listening to the port no 8000")
})

/*This is all same which we do in last lecture , we just use if else to route the different
responses */
