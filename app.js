const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('index.html')

const server = http.createServer((req, res) => {
    const url = req.url
    // Home page
    if ( url === '/') {
        res.writeHead(200, { 'content-type': 'text/html '})
        res.write(homePage)
        res.end()
    // About page
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html '})
        res.write('<h1>About Page</h1>')
        res.end()
    } 
    // 404 status code i.e page not found
    else {
        res.writeHead(404, { 'content-type': 'text/html '})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)