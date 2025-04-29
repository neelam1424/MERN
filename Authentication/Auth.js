const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET="neelam123";

const app=express();

const users=[];
app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username,
        password
    })
    res.send({
        message:"You have signed up"
    })

});

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const findUser=users.find(findUser=>findUser.username===username && findUser.password===password)

    if(findUser){
        const token=jwt.sign({
            username,
        },JWT_SECRET);
        res.send({
            token
        })
        console.log(users);
    }else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
})

function auth(req,res,next){
    const token=req.headers.token;//extract token
    const decodedData=jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username=decodedData.username;
        next()
    }else{
        res.json({
            message:"You are not logged in"
        })
    }
    next()
}




app.get("/me",auth,(req,res)=>{
    
    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==req.username){
            foundUser=users[i];
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password: foundUser.password
        })
    }else{
        res.json({
            message:"token invalid"
        })
    }
})

app.listen(3000)