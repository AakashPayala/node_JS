const http=require("http")

const server=http.createServer((req,res)=>{
    console.log("request made to server1")

    console.log(req.url, req.method)


    // sending Response back to BROWSER  :> 


    // setting header type 

    res.setHeader("Content-Type","text/html")
    res.write("<h1>hello, Browser</h1>")
    res.write("<h1>This is your Server</h1>")

    res.end()
})

server.listen(3000,"localhost",()=>{
    console.log("[SERVER UP AND LISTENING ON PORT NO -> 3000........ ]")
})

