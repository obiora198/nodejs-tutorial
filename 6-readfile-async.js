const { readFile } = require("fs")
console.log("starting the task");

const first = readFile("./content/first.txt","utf-8",(error,result) => {
    if(error){
        return console.log(err);
    } else if(result) {
        console.log(result);
        console.log("Finished first task");
    }
})

console.log("Next task");
