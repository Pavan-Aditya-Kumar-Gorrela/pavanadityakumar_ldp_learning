const compname = "Zemoso labs";
var emp_name = "Aditya";
const emp_id = 5438;
var curr_salary = 50000;
var exp = 0;
var is_per = false;

console.log("======Before Update=====");
console.log("Company Name: ", compname);
console.log("Employee Name: ",emp_name);
console.log("ID: ",emp_id);
console.log("Current Salary: ", curr_salary);
console.log("Experience: ", exp);
console.log("Is Permenant: ", is_per);


curr_salary=55000;
exp=1;

console.log("======After Update=====");
console.log("Company Name: ", compname);
console.log("Employee Name: ",emp_name);
console.log("ID: ",emp_id);
console.log("Current Salary: ", curr_salary);
console.log("Experience: ", exp);
console.log("Is Permenant: ", is_per);


let company = "Google";

{
    let company = "Microsoft";
    console.log(company);
}

console.log(company);

const age = 25;

{
    const age = 30;
    console.log(age);
}

console.log(age);


var city = "Delhi";

{
    var city = "Mumbai";
}

console.log(city);

var x = 10;

function demo() {

    console.log(x);

    var x = 20;

    console.log(x);

}

demo();

console.log(x);