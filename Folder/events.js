const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//Here 'response' is the name of an event
customEmitter.on('response', () => {
    console.log(`data received!`);
})

//emit method will emit 'response' event
customEmitter.emit('response')