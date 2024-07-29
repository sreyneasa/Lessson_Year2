import {employee}from "./src/employee";
import {department} from "./src/department";


let nyny = new employee("sreyny",1000,20);
let channy = new employee("channy",1000,20  );

let development = new department("IT department");

development.addManager(nyny);
development.addEmployee(channy);
