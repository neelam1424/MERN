const express=require("express");

const app=express();

app.get("/sum/:a/:b",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(res.query.b);

    res.json({
        ans:a+b
    })

});


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
