// const express =require('express');

// const app=express();


// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// app.get('/',function(req,res){
//     const n=req.query.n;
//     const ans=sum(n);

//     res.send("hi your answer is " +ans);
// })


// app.listen(3000);

const express = require("express");
const app=express();

function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"Sorry you are not of age yet",
        })
    }
}



app.get("/ride1",isOldEnoughMiddleware,function(req,res){

    res.json({
        msg:"You have successfully riden the ride 1"
    })

})

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    
    res.json({
        msg:"You have succedfully riden the ride 2"
    })


})

app.get("/ride3",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"You have succesfully riden the ride 3"
    })
})


app.listen(3000);