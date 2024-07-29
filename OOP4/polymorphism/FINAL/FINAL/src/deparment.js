"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.department = void 0;
var department = /** @class */ (function () {
    function department(name) {
        this.employees = [];
        this.name = name;
    }
    department.prototype.addmanager = function (manager) {
        this.manager = manager;
    };
    department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return department;
}());
exports.department = department;
