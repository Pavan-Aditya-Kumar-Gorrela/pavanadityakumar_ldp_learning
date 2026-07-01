//Before ES6
function greet(name){
    return name || "Guest";
}

//After ES6
function greet2(name = "Guest"){
    return name;
}

// console.log(greet()); 
// console.log(greet2()); 
// console.log(greet("Alice")); 
// console.log(greet2("Alice")); 


function createStudent(name, age=22){
    console.log(`Student Details
Name: ${name}, Age: ${age}`);
}

createStudent("Aditya");
createStudent("rahul", 23);