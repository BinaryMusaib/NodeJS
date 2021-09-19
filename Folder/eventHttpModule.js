const http = require('http')

const server = http.createServer()

//we used event method for listening our request
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)