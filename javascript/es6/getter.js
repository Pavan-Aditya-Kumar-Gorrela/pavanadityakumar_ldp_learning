class People {
    constructor(name){
        this.name = name;
    }

    getter(){
        console.log(this.name);
    }

    seter(name){
        this.name = name;
    }
}

const p = new People("Aditya");
p.getter();
p.seter("Tony Stark");
p.getter();