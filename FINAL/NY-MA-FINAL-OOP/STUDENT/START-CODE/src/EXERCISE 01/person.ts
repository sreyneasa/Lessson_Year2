 abstract class Person {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    private phone: string;
    constructor(name: string, age: number, phone: string) {
        super(name, age);
        this.phone = phone;
    }
}
class School {
    private name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Class{
    private name: my_enum;
    constructor(name: my_enum,){
        this.name = name;
    }

}

enum my_enum{
    A,
    B,
    C,
    D
}

abstract class myClass{
    myAttribute(): number{
        return 0;
    }
}

class MyClass_Child extends myClass{
    myAttribute(): number{
        return 1;
    }
}

let student = new Student('Sreyny',20,'0976543');
console.log(student);

let school = new School('PNC');
console.log(school);

let class1 = new Class(my_enum.A);
console.log(class1);




