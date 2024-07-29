abstract class Animals{
    private name: string;
    constructor(name:string){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    abstract playSound(sound: string): void;
}

class Dog extends Animals{
    constructor(name:string){
        super(name);
    }
    playSound(sound: string): void {
        console.log(sound);
    }
}

class Cat extends Animals{
    constructor(name:string){
        super(name);
    }
    playSound(sound: string): void {
        console.log(sound);
    }
}

let dog1 = new Dog('oogg');
let cat1 =  new Cat('Nano');

dog1.playSound('woof!');
cat1.playSound('moee!');