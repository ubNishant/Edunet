const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("<h1 style='color:red'> Welcome</h1>")
        res.write('<h1>welcome</h1>');
        res.end();
    }
    else if(req.url==='/contact')
    {
        res.end("353738982999");
    }
    else if(req.url==='/Service')
        {
            res.end("Service available");
        }

    

    
    else if(req.url='/about')
    {
        res.end('This is the end')
    }
    else{
        res.end('404=not found')
    }

});
server.listen(3000,()=>{
    console.log('Server runnimg on http://localhost:300');
})

