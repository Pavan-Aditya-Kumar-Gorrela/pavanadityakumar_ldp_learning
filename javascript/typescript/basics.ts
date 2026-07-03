function add(num1:number,num2:number,showResult:boolean, phrase:string){
    if(showResult){
        console.log(phrase + (num1 + num2));
    }

}

let number1 = 5;
let number2 = 2.8;
let printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);