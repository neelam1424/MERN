//create a middleware function that logs each incoming request's HTTP method,URL,and timestamp to the console"

const express =require("express");

const app=express();


app.use();
function logDetails(req,res,next){

    console.log("Method used is "+req.method);
    console.log("URL is "+req.url);
    console.log(new Date());

    next();

}

app.get('/sum',logDetails,function(req,res){
    const a=parseInt(req.query.a);
    const b =parseInt(req.query.b);
    res.json({
        ans:a+b
    })
});


app.listen(3000);