var Contract = /** @class */ (function () {
    function Contract() {
    }
    return Contract;
}());
var Employee = /** @class */ (function () {
    /**
     * @param name employee name
     * @param employeeType can be either "DEVELOPER" or "MANAGER" or "COMMERCIAL"
     */
    function Employee(name, employeeType) {
        this.name = name;
        this.employeeType = employeeType;
        this.contracts = []; // This is interesting only for commercials
        this.teamMembers = []; // This is interesting only for managers
        this.skills = []; // This is interesting only for developers
    }
    Employee.prototype.getSalary = function () {
        if (this.employeeType === "COMMERCIAL") {
            return this.contracts.length * 400;
        }
        else if (this.employeeType === "MANAGER") {
            return this.teamMembers.length * 600;
        }
        else if (this.employeeType === "DEVELOPER") {
            var salary = this.skills.length * 500;
            if (this.skills.includes("OOP")) {
                salary += 2000;
            }
            return salary;
        }
        return 0; // Unknown employee type
    };
    return Employee;
}());
