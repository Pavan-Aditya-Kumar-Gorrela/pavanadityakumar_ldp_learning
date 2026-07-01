// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function greet(name){
    return `Hi ${name} Welcome to Zemoso Technogies`
}

function getAccess(user, callback){
    console.log("-----Getting Acess-----")
    setTimeout(()=>{
        console.log(callback(user));
    },3000);
}

getAccess("Pavan Aditya Kumar Gorrela",greet);


// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

const getName = (firstName, lastName) =>{
    return firstName[0] + lastName[0];
}

console.log(getName("Roger", "Waters"));