const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to home page')
    }
    if(req.url==='/about'){
        res.write('Welcome to about page')
    }
    res.end(`
    

       
    `)
})

server.listen(5000)
