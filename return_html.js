const fs=require('fs');
const http=require('http');
const hostname='localhost';
const port=3000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    fs.readFile('./view/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });
});

server.listen(port,hostname,()=>{
    console.log('listening');
});