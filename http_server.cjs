const http = require("http")

const port=3000;
const server=http.createServer((req,res)=>{

    console.log(req.url)
    res.statusCode=200
    res.setHeader("Content-Type","text/html")
    res.end("<h1>Hi this is server's response</h1>")


})

server.listen(port,()=>{
    console.log(`server is listening on port number ${port}`)

});