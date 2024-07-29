
import { person } from "./person";

export class employee extends person{
    private salary:number;
    constructor(salary: number, name: string, age: number){
        super(name,age);
        this.salary = salary;
    }
}