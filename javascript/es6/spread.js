const a = [1, 2, 3];
const b = [...a];
const c = [...a,...b];

console.log(a);
console.log(b);
console.log(c);


const stu = {
    name: 'Aditya'
}

const updated = {
    ...stu,
    age: 22
}

console.log(updated);


const frontend = ['React', 'Angular', 'Vue'];
const backend = ['Node', 'Express', 'MongoDB'];

const fullstack = [...frontend, ...backend];

console.log(fullstack);