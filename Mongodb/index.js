const express =require("express");
const {UserModel,TodoModel} =require("./db");
const jwt =require("jsonwebtoken")
const mongoose=require("mongoose");
const JWT_SECRET="s3cret"
const app=express();
app.use(express.json());


mongoose.connect("mongodb+srv://neelam:neelumore14@cluster0.z1oj5mz.mongodb.net/todo-app");





app.post("/signup",async function(req,res){
const email=req.body.email;
const password=req.body.password;
const name=req.body.name;

await UserModel.create({
    email:email,
    password:password,
    name:name,
});
res.json({
    message:"You are signed up"
})
});

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;


    const user =await UserModel.findOne({
        email:email,
        password:password,
    });
    console.log(user);

    if(user){
        const token=jwt.sign({
            id:user._id
            //id:response._id.toString()
        },JWT_SECRET);

        res.json({
            token
        });
    }else{
        res.status(403).json({
            message:"Incorrect creds"
        })
    }
    
});

app.post("/todo",auth,(req,res)=>{
    const userId=req.userId;
    res.json({
        userId:userId
    })
})

app.get("/todos",auth,(req,res)=>{
    const userId=req.userId;


    res.json({
        userId:userId
    })
})


function auth(req,res,next){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodeData = jwt.verify(token, JWT_SECRET);
        req.userId = decodeData.id;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}

app.listen(3000);