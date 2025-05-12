const bcrypt =require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {z} =require("zod");

mongoose.connect("mongodb+srv://neelam:neelumore14@cluster0.z1oj5mz.mongodb.net/todo-app");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredBody=z.object({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string()
    })

    //const parsedData =requiredBody.parse(req.body);
    const parsedDataWithSuccess=requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.sucess){
        res.json({
            message: "Incorrect Format",
            error:parsedDataWithSuccess.error
        })
        return
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword= await bcrypt.hash(password,5);
console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name,

    });
    
    res.json({
        message: "You are signed up"
    })
});
 

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });

    if(!response){
        res.status(403).json({
            message: "User does not exist in our datatabase"
        })
        return
    }

    const passwordMatch=await bcrypt.compare(password,response.password);



    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);