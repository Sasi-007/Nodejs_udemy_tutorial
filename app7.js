const http=require('http');
const hostname='localhost';
const port=3000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<h3>And then</h3>');
    res.write('<p>then</p>');
    res.write('<h1>U read this first</h1>');
    res.end();
});

server.listen(port,hostname,()=>{
    console.log('listening');
});