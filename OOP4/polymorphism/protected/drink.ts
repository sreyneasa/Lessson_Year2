class Drink {
    private name : string;
    private price : number;
    constructor(name : string, price : number){
        this.name = name;
        this.price = price;
    }
    getName() : string{
        return this.name;
    }
    getPrice() : number{
        return this.price;
    }
}

class Coffee extends Drink{
    private coffee: string;
    constructor(name : string, price : number,coffee: string) {
        super(name, price);
        this.coffee = coffee;
    }
    getCoffee() : string{
        return this.coffee;
    }
}
class Orange extends Drink{
    private orange: string;
    constructor(name : string, price : number,orange: string) {
        super(name, price);
        this.orange = orange;
    }
    getOrange() : string{
        return this.orange;
    }
}

let orangeJuice = new Orange('lemonet',20,'green tea');
let coffees = new Coffee('capogino',15,'amazon');
console.log(orangeJuice.getName(),orangeJuice);
console.log(coffees.getCoffee(),coffees)