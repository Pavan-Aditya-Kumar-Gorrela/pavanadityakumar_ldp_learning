function combine(input1: number | string, input2: number | string) {
  // let result;
  // if(typeof input1 === "number" && typeof input2 === "number") {
  //   result = input1 + input2;
  // }else{
  //   result = input1.toString() + input2.toString();
  // }
  const result = input1 + input2;
  return result;
}

console.log(combine(5, 10));
console.log(combine("Hello, ", "world!"));
console.log(combine("The answer is: ", 42)); //valid in JS but not in TS
console.log(combine(3, " apples")); //valid in JS but not in TS