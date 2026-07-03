function addNumbers(a:number, b:number):number {
    return a + b;
}

function brokenAdd(a:number, b:number) {
    return `${a + b}`;
}

console.log(addNumbers(5, 10)); //15
console.log(brokenAdd(5, 10)); //15


function void1():void {
    console.log("This function returns void");
}

function void2():void {
    return;
}

function void3():void {
    return undefined;
}

// function void4():void {
//     return null;
// }

// function void5():void {
//     return 5; //ERROR!!
// }

console.log(void1());
console.log(void2());
console.log(void3());
// console.log(void4());
// console.log(void5()); //ERROR!!



const void6 = ():void => {
    console.log("This function returns void");
}

const isEven = (num:number):boolean => {
    return num % 2 === 0;
}

//callbacks

function executeCallback(callback: () => void): void {
    console.log("Executing callback...");
    callback();
}

// executeCallback(() => {
//     console.log("Callback executed!");
// });

executeCallback(() => {
    return 42;
});