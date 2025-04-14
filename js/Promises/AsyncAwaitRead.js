const fs=require("fs")
function setTimeoutPromisefied(duration){
    return new Promise(function(reolve){
        setTimeout(resolve,duration);
    });
}

function read_file() {
return new Promise(function(resolve){
    fs.readFile("a.txt", 'utf8', function(err, data) {
        resolve(data);
})
})
}

async function read(){
    await read_file();
    
}

read();