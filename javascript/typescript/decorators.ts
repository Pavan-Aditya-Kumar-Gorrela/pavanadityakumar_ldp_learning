//Decorators


function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Employee {}


//Method Decorators
function Log(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    console.log("Method:", propertyKey);
}

class User {

    @Log
    login() {
        console.log("Logged In");
    }
}

//Property Decorators
function ReadOnly(target: any, propertyKey: string) {
    console.log("Property:", propertyKey);
}

class Product {

    @ReadOnly
    name: string = "Laptop";
}