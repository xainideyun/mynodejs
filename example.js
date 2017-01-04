var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200, {"Content-Type": 'text/plain'});
  res.end("Hello World");
}).listen(8888, "127.0.0.1");
console.log("服务已经在本地端口8888运行...")
