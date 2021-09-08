//This is a simple program for using the local server.
const http = require('http');

const server = http.createServer( (req, res) => {
    if (req.url === '/') { res.end('Welcome to our home page'); }
    if (req.url === '/about') { res.end('Here is our short story.'); }
    res.end(`
    <h1>Oops</h1>
    <p>Page not Found...</p>
    <a href='/'> Home </a>
    `);
});

server.listen(5000);