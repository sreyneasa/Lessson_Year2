import {person} from "./person";

export class employee extends person {
    private salary: number;
    constructor(name: string, age: number, salary: number) {
        super(name,age);
        this.salary = salary;
    }
}