const express=require("express");

const app=express();

let requestCount =0;

function requestIncreaser(req,res,next){
    requestCount=requestCount+1;
    console.log(`Total number of requests = ${requestCount}`);
    next();
}

function realSumHandler(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    
    res.json({
        ans :a+b
    });
}
app.get("/sum/:a/:b",requestIncreaser,realSumHandler);


app.get("/sub/:a/:b",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a-b
    })

});



app.get("/mul/:a/:b",function(req,res){

    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a*b
    })


});

app.get("/div/:a/:b",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a/b
    })

});

app.listen(3000);
