// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(8124, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:8124/');

var tcp = require('tcp');
var server = tcp.createServer(function (socket) {
  socket.setEncoding('utf8');
  socket.addListener('connect', function () {
    socket.write('Bienvenue\r\n');
  });
  socket.addListener('data', function (data) {
    socket.write('-> ' + data);
  });
  socket.addListener('end', function () {
    socket.write('goodbye\r\n');
    socket.close();
  });
});
server.listen(7000, 'localhost');

// var http = require('http');
// http.createServer(function (req, res) {
//   setTimeout(function () {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('node.js demo');
//     var current_date = new Date();
//     res.write('Date actuelle : ' + current_date);
//     res.close();
//   }, 1);
// }).listen(8080);