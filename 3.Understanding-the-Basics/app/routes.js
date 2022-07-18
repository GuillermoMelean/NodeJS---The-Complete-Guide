const fs = require('fs');

const requestHandler = (req, res) => {

    const {url, method} = req;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Add new Username</title><head>');
        res.write('<body><h1>Add new Username</h1><form action="/create-user" method="POST"><input type="text" name="username" placeholder="Username"><button type="submit">Add Username</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.writeHead(302, { 'Location': '/' })
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}


module.exports = requestHandler;