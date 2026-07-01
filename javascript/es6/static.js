class Main{
    constructor(name) {
        this.name = name;
    }
    study(){
        console.log(`${this.name} is studying.`);
    }


    static greet() {
        console.log("Hello from static method!");
    }
}


const main = new Main("Alice");
main.study();
Main.greet(); // Calling static method without creating an instance