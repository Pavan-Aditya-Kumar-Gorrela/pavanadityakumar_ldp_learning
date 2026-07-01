const students = [
    "Aditya",
    "Rahul",
    "Anjali",
    "Priya",
    "Kiran"
];

console.log(students);
console.log(students[0]);
console.log(students[4]);
students.push("Sneha");
students.unshift("Ravi");
students.pop();
students.shift();
console.log(students);

const cart = [
    "Laptop",
    "Mouse",
    "Keyboard"
];
cart.push("Monitor");
cart.push("Headphones");
cart.splice(1,1);
cart[1] = "Mechanical Keyboard";

const salaries = [
    45000,
    52000,
    61000,
    47000,
    80000
];

const arr = [1,2,3];

console.log(arr.slice(1));

console.log(arr);
console.log(arr.splice(1,1));

console.log(arr);