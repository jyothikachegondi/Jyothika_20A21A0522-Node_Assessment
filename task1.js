var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'ContentType':'text/html'});
    res.write('Hello,World!');
    res.end();
}).listen(5000);