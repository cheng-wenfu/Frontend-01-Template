const http = require('http');

const server = http.createServer({

},(req, res) => {
    //以下是服务器响应
    console.log("request received");
    console.log(req.headers)
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
  });

  server.listen(8088,"127.0.0.1") //定义服务器和端口