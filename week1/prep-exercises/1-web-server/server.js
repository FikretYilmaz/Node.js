/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  // res.write('Hello World!'); // Sends a response back to the client
  // res.end(); // Ends the response
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  } else if (req.url === '/index.js') {
    fs.readFile(path.join(__dirname, 'index.JS'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(content);
    });
  } else if (req.url === '/style.css') {
    fs.readFile(path.join(__dirname, 'style.css'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(content);
    });
  }
});
server.listen(3000); // The server starts to listen on port 3000
