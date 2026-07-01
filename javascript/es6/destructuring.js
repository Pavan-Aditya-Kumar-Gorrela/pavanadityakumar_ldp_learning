const numbers = [1,2,3];
const [a,b,c] = numbers;
// console.log(a,b,c);

const student = {
    name: 'Aditya',
    age: 22,
    cgpa: 8.9
}

const {name, age, cgpa} = student;
// console.log(name, age, cgpa);
const {name: studentName, age: studentAge, cgpa: studentCgpa} = student;
// console.log(studentName, studentAge, studentCgpa);

const studentDetails = {
    name: 'Aditya',

    marks:{
        java: 90
    }
};

const { marks, marks:{java} } = studentDetails;
console.log(marks, java);

