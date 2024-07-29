"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.company = void 0;
var company = /** @class */ (function () {
    function company(name) {
        this.departments = [];
        this.name = name;
    }
    company.prototype.addDepartment = function (department) {
        this.departments.push(department);
    };
    return company;
}());
exports.company = company;
