const fs=require("fs")

//reading file - takes two args
// this is an asyn func  - it will take some time to run but won't stop the code from executing.
fs.readFile("./temp.txt",(err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
        //throws a buffer in the console.
        console.log(data.toString())
        //converts the buffer to actual string using toString() func.


    }
})


//writing file - takes three args
//when file is not present it will just create a new file with the specified name and write your content in it :

fs.writeFile("./temp2.txt","hello, world ",()=>{
    console.log("new file created. ")
})


//make directories 

fs.mkdir("./newFolder",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("folder created")
})

// same goes for removing a directory .

// func name = > fs.rmdir(name of file,func)


// .existsSync - use to check if the file is present or not 

//deleting a file - fs.unlink(...,()=>{...})

if(fs.existsSync("./temp2.txt")){
    fs.unlink("./temp2.txt",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("the file was deleted successfully :) ")
    })

}



