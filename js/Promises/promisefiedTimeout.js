function setTimeoutPromisefied(ms){
    return new Promise(resolve =>(resolve,ms));
}

function callBack(){
    console.log("Callback took 3000 ms");
}

setTimeoutPromisefied(3000).then(callBack);