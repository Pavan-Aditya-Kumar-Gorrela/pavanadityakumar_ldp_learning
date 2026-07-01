const numbers = [1, 2, 3, 4, 5];

const sum = (...numbers) => {
     console.log(numbers);
}

const calculateAverage = (...numbers) =>{
    console.log(numbers.reduce((acc,curr) => acc+curr,0)/numbers.length);
}

sum(numbers);
calculateAverage(...numbers);