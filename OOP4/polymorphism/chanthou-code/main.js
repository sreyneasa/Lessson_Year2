"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./src/employee");
var department_1 = require("./src/department");
var nyny = new employee_1.employee("sreyny", 1000, 20);
var channy = new employee_1.employee("channy", 1000, 20);
var development = new department_1.department("IT department");
development.addManager(nyny);
development.addEmployee(channy);
