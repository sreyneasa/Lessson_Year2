
import { department } from "./deparment";


export class company {
    private name: string;
    private departments: department[] = [];

    constructor(name: string) {
        this.name = name;
    }
    addDepartment(department: department) {
        this.departments.push(department);
    }   
}
