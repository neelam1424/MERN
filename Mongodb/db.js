const mongoose =require("mongoose");

const Schema=mongoose.Schema;
const ObjectId =Schema.ObjectId;



const User=new Schema({
    
    password:String,
    email:{type:String,unique:true},
    name:String,
    
});

const Todo=new Schema({
    userID: ObjectId,
    title:String,
    done:Boolean,
    
});

const UserModel=mongoose.model('users',User);
const TodoModel=mongoose.model('todos',Todo);

module.exports={
    UserModel,
    TodoModel
}