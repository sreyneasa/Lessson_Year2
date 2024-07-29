
class Person {
    private name: string;
    private yearOfBirth: number;
    
    constructor(name: string, yearOfBirth: number) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    
    public getName(): string {
        return this.name;
    }

    public getYearOfBirth(): number {
        return this.yearOfBirth;
    }
}

class Calendar {
    private static instance: Calendar;
    private currentYear: number;
    
    private constructor(currentYear: number) {
        this.currentYear = currentYear;
    }
    
    public static getInstance(currentYear: number): Calendar {
        if (!Calendar.instance) {
            Calendar.instance = new Calendar(currentYear);
        }
        return Calendar.instance;
    }
    
    public getCurrentYear(): number {
        return this.currentYear;
    }
    
    public computeAge(person: Person): number {
        return this.currentYear - person.getYearOfBirth();
    }
}


let calendar = Calendar.getInstance(2024);

let person1 = new Person('Cha', 2003);
let person2 = new Person('Chhanny', 2004);

console.log(person1.getName() + "'s age:", calendar.computeAge(person1));
console.log(person2.getName() + "'s age:", calendar.computeAge(person2)); 
