const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('index.html')
const homeStyles = readFileSync('styles.css')
const homeImage = readFileSync('logo.svg')
const homeLogic = readFileSync('browser-app.js')

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
    // styles
     else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css '})
        res.write(homeStyles)
        res.end()
    } 
    // imag
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml '})
        res.write(homeImage)
        res.end()
    } 
    // logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript '})
        res.write(homeLogic)
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
