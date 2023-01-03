const fs=require('fs');

// works on non blocking i/o 
fs.readFile("sample.txt","utf8",(err,data)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


// fs.readFileSync - this blocks the code 

const exp=fs.readFileSync("sample.txt")
console.log(exp) //spits a stream of buffer. 
console.log(exp.toString()) //converts the buffer to actual text.



fs.writeFile("sample2.txt","this is another sample file : ) ",()=>{
    console.log("done")
})

// fs.writeFileSync -to block the code 







