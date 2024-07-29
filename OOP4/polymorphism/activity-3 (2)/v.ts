class Contract {}

enum EmployeeType {
  DEVELOPER = "DEVELOPER",
  MANAGER = "MANAGER",
  COMMERCIAL = "COMMERCIAL",
}

class Employee {
  private contracts: Contract[] = [];
  private teamMembers: Employee[] = [];
  private skills: string[] = [];

  constructor(private name: string, private employeeType: EmployeeType) {}

  addContract(contract: Contract) {
    if (this.employeeType === EmployeeType.COMMERCIAL) {
      this.contracts.push(contract);
    }
  }

  addTeamMember(employee: Employee) {
    if (this.employeeType === EmployeeType.MANAGER) {
      this.teamMembers.push(employee);
    }
  }

  addSkill(skill: string) {
    if (this.employeeType === EmployeeType.DEVELOPER) {
      this.skills.push(skill);
    }
  }

  getSalary(): number {
    switch (this.employeeType) {
      case EmployeeType.COMMERCIAL:
        return this.contracts.length * 400;
      case EmployeeType.MANAGER:
        return this.teamMembers.length * 600;
      case EmployeeType.DEVELOPER:
        let salary = this.skills.length * 500;
        if (this.skills.includes("OOP")) {
          salary += 2000;
        }
        return salary;
      default:
        return 0;
    }
  }
}
const commercialEmployee = new Employee("cha", EmployeeType.COMMERCIAL);
commercialEmployee.addContract(new Contract());
console.log(commercialEmployee.getSalary()); // Output: 400

const managerEmployee = new Employee("luna", EmployeeType.MANAGER);
managerEmployee.addTeamMember(new Employee("kaka", EmployeeType.DEVELOPER));
console.log(managerEmployee.getSalary()); // Output: 600

const developerEmployee = new Employee("emma", EmployeeType.DEVELOPER);
developerEmployee.addSkill("JavaScript");
developerEmployee.addSkill("HTML");
console.log(developerEmployee.getSalary()); // Output: 2500
