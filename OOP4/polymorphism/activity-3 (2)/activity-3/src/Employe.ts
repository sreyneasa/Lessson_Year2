class Contract {}
class Employee {
  constructor(protected name: string) {}
  getSalary(): number {
    return 0;
  }
}
class Commercial extends Employee {
  private contracts: Contract[] = [];
  constructor(name: string, private employeeType: string, contracts: Contract[]) {
    super(name);
    this.contracts = contracts;
  }
  getSalary(): number {
    return this.contracts.length * 400;
  }
}
class Manager extends Employee {
  private teamMembers: Employee[] = [];

  constructor(name: string, private employeeType: string, teamMembers: Employee[]) {
    super(name);
    this.teamMembers = teamMembers;
  }
  getSalary(): number {
    return this.teamMembers.length * 600;
  }
}
class Developer extends Employee {
  private skills: string[] = [];
  constructor(name: string, private employeeType: string, skills: string[]) {
    super(name);
    this.skills = skills;
  }
  getSalary(): number {
    let salary = this.skills.length * 500;

    if (this.skills.includes("OOP")) {
      salary += 2000;
    }

    return salary;
  }
}