//create a function that takes an array of object as input,and return the user whose age >18 and are male

function maleVoter(arr){
    //return arr.filter(user => user.age > 18 && user.gender === "male");/*logic by using filter*/
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].gender=='male'&& arr[i].age>18){
            arr2.push(arr[i]);
        }
}
return arr2;
}

const users=[{
    name:"john",
    age:21,
    gender:"male"
},{
    name:"jane",
    age:17,
    gender:"female"
},{
    name:"Rasika",
    age:2,
    gender:"male"
}]

console.log(maleVoter(users));