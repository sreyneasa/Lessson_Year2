class Country {
    name : string;
    population : number;
    capitail : string;
    currency : string;
    constructor (name:string, population:number,capital:string,currency:string){
        this.name = name;
        this.population = population;
        this.capitail = capital;
        this.currency = currency;
    }
    getInformation () :string{
        return "Welcome to " + this.name + " with population " + this.population + " with population " + this.capitail + " and currency " + this.currency +" !";
    }
}

let cambodia = new Country ("cambodia" ,1600000, "Phom Penh","KPC");
console.log(cambodia.getInformation());
