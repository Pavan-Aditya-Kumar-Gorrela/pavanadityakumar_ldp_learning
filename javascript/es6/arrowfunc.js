function multiply(a, b) {
    return a * b;
}

function isEven(num) {
    return num % 2 === 0;
}

function greet(name) {
    return `Hello ${name}`;
}


const multiPlyArrow = (a, b) => a * b;
const isEvenArrow = num => num % 2 === 0;
const greetArrow = name => `Hello ${name}`;


console.log('======Normal Function======');
console.log(multiply(2, 3));
console.log(isEven(4));
console.log(greet('Alice'));

console.log('======Arrow Function======');
console.log(multiPlyArrow(2, 3));
console.log(isEvenArrow(4));
console.log(greetArrow('Alice'));
