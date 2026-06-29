const employee = {
    id: 5438,
    name: "Aditya",
    department: "Dev",
    salary: 50000,
    experience: 0,
    isPermanent: true
}

console.log(employee);
employee.salary = 55000;
console.log(employee);
employee.experience =1;
console.log(employee);
employee.designation = 'ASE';
console.log(employee);
delete employee.isPermanent;
console.log(employee);


const car={

brand:"BMW",

model:"X5",

price:9000000,

color:"Black"

}

for(var key in car){
    console.log(key,":",car[key]);
}



const employee2={

id:101,

name:"Aditya",

salary:65000,

department:"Engineering"

}

const {id, name, salary: employeeSalary} = employee2;
console.log(employee2);

const student1={

name:"Rahul",

age:22

}


const {...student2} = student1;
student2.cgpa = 8.54;
student2.college = 'SRKR';
console.log(student1);
console.log(student2);

let a={

name:"John"

};

let b=a;

b.name="David";



const {...c} = a;
c.name = "Aditya";


console.log(a.name);
console.log(b.name);
console.log(c.name);


const person={

name:"John"

};

person.name="David";

console.log(person);

const obj={};

obj.age=25;

console.log(obj);



const student={

name:"Rahul"

};



const person2={

name:"John",

address:{

city:"Delhi"

}

};

const copy={

...person2

};

copy.address.city="Mumbai";

console.log(person2.address.city);


const obj2={

name:"John"

};

console.log(Object.keys(obj2));

console.log(Object.values(obj2));

console.log(Object.entries(obj2));
