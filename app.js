const http = require('http');

const server= http.createServer((req, res) =>{
    const url= req.url;
    const method = req.method;

    if (url ==='/favicon.ico'){
        res.statusCode=204;
        res.end();
    }

    if(url ==="/"){
        console.log("true");
        res.setHeader('Content-Type','text/html');
        res.write("<html><body><h1>Response</h1></h1></body></html>");
        res.end();
    }


});

server.listen(3000,()=>{
    console.log("server listening");
});