const htttp = require('http');
const server = htttp.createServer((req , res)=>{
    res.end('Hello Form The Website')
    
    }


    
);







server.listen('8000','127.0.0.1', ()=>{
    console.log('Live Server in Here');
})