class Person {
    name = 'Sreyny';
    province = 'Kampong Cham';
    constructor(name: string, province: string){
        this.name = name;
        this.province = province;
    }

}

class Employee extends Person{
    salary: number;

    constructor(name: string, province: string, salary: number){
        super(name, province);
        this.salary = salary;
    }
}
let sreyny = new Employee("Sreyny", "Kampong Cham", 500);
console.log(sreyny);
