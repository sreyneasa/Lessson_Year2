import { employee } from "./employee";
import { department } from "./deparment";
import { company } from "./company";



let chanthou = new employee(1000, "Chanthou", 19);
let employee1 = new employee(200, "Rin", 29);
let employee2 = new employee(200, "Cha", 24);


let development = new department("IT department");
development.addmanager(chanthou);
development.addEmployee(employee1);
development.addEmployee(employee2);
console.log(development);
let technical = new company(" technical");
technical.addDepartment(development);
console.log(technical);