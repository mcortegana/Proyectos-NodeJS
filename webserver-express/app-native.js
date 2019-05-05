/**
 * Forma nativa de crear un servidor http usando nodejs
 */

const http = require('http');
const PORT = 8080;

http.createServer((req, res) => {
   res.writeHead(200, {
       'Content-Type':'application/json'
   });

    let response = {
        name: 'Miguel',
        edad: 26,
        url: req.url
    }
   
    res.write(JSON.stringify(response));
    res.end();
}).listen(PORT);

console.log(`Listening in port ${PORT}`);
