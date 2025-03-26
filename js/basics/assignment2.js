function canVote(age){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}


console.log(canVote(3));
console.log(canVote(56));