function greet(user){
    if(user.gender ==='male'){
        console.log( "Hi Mr ."+user.name+", Your age is "+user.age);
    }
    if(user.gender ==="female"){
        console.log("Hi Mrs."+user.name+", Your age is "+user.age);
    }
    else{
        console.log("Hi Other ."+user.name+", Your age is "+user.age);
    }
}


let user ={
    name: "Lucy",
    age: 30,
    gender: "female"
}

greet(user);