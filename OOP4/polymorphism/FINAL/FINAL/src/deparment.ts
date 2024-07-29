import { employee } from "./employee";

export class department {
    private name: string;
    private employees: employee[]=[];
    manager: employee;


    constructor(name: string) {
        this.name = name;
    }

    addmanager(manager: employee) {
        this.manager = manager;
    }

    addEmployee(employee: employee) {
        this.employees.push(employee);
    }
}