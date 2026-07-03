function myFunc(originalMethod, context){
    return function(...args){
        const result = originalMethod.call(this, ...args);
        return result.toUpperCase();
    };
}

class Person{
    @myFunc
    greet(name = 'Guest'){
        return `Hello ${name}`;
    }
}

const user = Person();
console.log(user.greet());