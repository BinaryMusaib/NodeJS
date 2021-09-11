const http = require('http');

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        return res.end('Home Page')
    }
    if (req.url === '/about') {
        // Blocking Code
        await new Promise((resolve, reject) => {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    console.log(`${i} ${j}`);
                }
            }
            resolve();
        })
        return res.end('About Page');
    }
    return res.end('Page Not Found');
});

server.listen(5000, () => {
    console.log('Server Listening on port 5000...');
});