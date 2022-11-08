const http=require("http")

const fs=require("fs")
const { isAbsolute } = require("path")

const server=http.createServer((req,res)=>{
    console.log("request made to server2 ")

    // console.log(req.url, req.method)


    // sending Response back to BROWSER  :> 
    // reading HTML PAGE 

    res.setHeader("Content-Type","text/html")

    let path ="./"
    switch(req.url){
       
        case '/':path=path+"index.html"
        res.statusCode=200
        break

        case '/about': path=path+"about.html"
        res.statusCode=200
        break

          
        default: path=path+"404.html"
        res.statusCode=404
        break
    }


    // sending an html page 
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })

})

server.listen(9999,"localhost",()=>{
    console.log("[SERVER UP AND LISTENING ON PORT NO -> 9999........ ]")
})



