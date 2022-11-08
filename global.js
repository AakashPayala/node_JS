//global object

// globalThis.setTimeout(()=>{
//     console.log("hello world")
// },4000);

// works the same since its a global object 
setTimeout(()=>{
    console.log("hello world")
},4000);


// set interval  = keeps running the function every interval
// let count=1;
// setInterval(() => {
//     console.log("count -> ",count++)
    
// }, 1000);

// use ctrl+C to exit the loop :)


// using clear interval to stop setInterval function 
setTimeout(() => {
   clearInterval(setCount) 
}, 5000);
let count=1;
const setCount=setInterval(() => {
    console.log("count -> ",count++)
    
}, 1000);
