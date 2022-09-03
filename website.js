
const fs = require('fs');
const http = require('http');


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (res.url === '/') {
        req.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else if (res.url === '/cwh') {
        req.statusCode = 200;
        res.end('<h1> Hi,This is Maharufh Ali Mir</h1> <p> This is the man you are looking for!</p>');

    }
    else if (res.url === '/about') {
        req.statusCode = 200;
        res.end('<h1>About Ali Mir</h1> <p>Hey This is the man you are looking for!</p>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p>Hey This is not found!</p>');
    }
})

server.listen(port, () => {
    console.log('Server is listening on port ${port}');
});