const DEV_INTERN = 0;
const ASSOCIATE =  1;
const SDE = 2;
const CEO = 3;


//without enums
const Employee = {
    name : "Aditya",
    role : DEV_INTERN
    //  role : dev_intern
    // role : 'FOUNDER'
    // role : 34
   
    
}

console.log(Employee.role);

//with enums

enum designation {
    DEV_INTERN,
    ASSOCIATE,
    SDE,
    CEO
}

const Employee2 = {
    name : "John",
    role : designation.SDE
}

console.log(Employee2.role);
console.log(designation[3]);