// streams - start using the data, before it has finished loading 

const fs=require("fs")
const { Stream } = require("stream")

const readStream=fs.createReadStream("sample.txt")


readStream.on("data",(chunk)=>{
    console.log("----new chunk----")
    console.log(chunk.toString())
})



// to use write Stream 

const writeStream=fs.createWriteStream("sample2.txt")
writeStream.write("text")



// you can also use piping to do the same thing 

// syntax for piping data .. 

readStream.pipe(writeStream)



