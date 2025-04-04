function setTimeoutPromisified(duration){
    return new Promise(resolve => setTimeout(resolve,duration));
}


async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hello there");
}


solve();