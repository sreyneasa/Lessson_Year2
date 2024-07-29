import { employee } from "./employee";

export class department{
    private name: string;
    private employees: employee[]=[];
    private manager: employee;

    constructor(name: string,){
        this.name = name;

    }
    addManager(manager: employee){
        this.manager = manager;
    }
    addEmployee(employee: employee){
        this.employees.push(employee);
    }
}