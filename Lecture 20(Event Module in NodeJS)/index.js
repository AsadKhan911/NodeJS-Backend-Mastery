const { ok } = require('assert');
const EventEmitter = require('events')

const event = new EventEmitter();

event.on("ShowMyName" , () => {
    console.log("My name is Asad Khan")
})
event.emit('ShowMyName')

//Events with arguments
event.on('CheckStatus' , (SC , msg) => {
    console.log(`The status code is ${SC} and the status message is ${msg}`)
})

event.emit('CheckStatus' , 200 , 'ok')