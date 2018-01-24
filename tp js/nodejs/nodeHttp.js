/*const http = require('http');
var modifie a la volet
const isencie une fois la stuc de l'element type
*/
const express = require('express');
const path = require('path');
var app = express();

app.use('/assets', express.static('client/static'))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '/client/index.html'))
});
app.listen(3000);
/*const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/