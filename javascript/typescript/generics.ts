function printValue<T>(value: T): T {
    return value;
}

console.log(printValue<number>(100));
console.log(printValue<string>("Hello"));

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirst([10,20,30]));
console.log(getFirst(["A","B","C"]));




interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "TypeScript"
};

console.log(numberBox.value);
console.log(stringBox.value);



class Data<T> {

    constructor(public value: T){}

    display() {
        console.log(this.value);
    }
}

const d1 = new Data<number>(10);
const d2 = new Data<string>("Hello");

d1.display();
d2.display();