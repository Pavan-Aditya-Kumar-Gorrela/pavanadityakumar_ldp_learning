//Type Infering
const hobbies = ["reading", "gaming", "hiking", "cooking", "traveling"];

let favBooks: string[];
favBooks = ["The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice", "The Catcher in the Rye"];


let AnyTypes: any[];
AnyTypes = ["Hello", 42, true, { name: "John" }, [1, 2, 3]];

// let undefinedArray: undefined[];
// undefinedArray = ["Hello", 42, true, { name: "John" }, [1, 2, 3]];

for(const hobby of hobbies){
    console.log(hobby.toUpperCase());
}

for(const type of AnyTypes){
    console.log(type.toUpperCase()); //clears compile time but crashes at run time
}


