
class WepAlumni {
    experienceInVueJS: number;
    experienceInNodeJS: number;
    canCodeOOP: boolean;

    constructor(experienceInVueJS: number, experienceInNodeJS: number, canCodeOOP: boolean) {
        this.experienceInVueJS = experienceInVueJS;
        this.experienceInNodeJS = experienceInNodeJS;
        this.canCodeOOP = canCodeOOP;
    }

    getSalary(): number {
        if (this.experienceInVueJS < 1 && this.experienceInNodeJS < 1 && !this.canCodeOOP) {
            return 250;
        } else if (this.experienceInVueJS >= 1 && this.experienceInNodeJS < 1 && !this.canCodeOOP) {
            return 350;
        } else if (this.experienceInVueJS >= 1 && this.experienceInNodeJS >= 1 && !this.canCodeOOP) {
            return 450;
        } else if (this.experienceInVueJS >= 1 && this.experienceInNodeJS >= 1 && this.canCodeOOP) {
            return 700;
        } else {
            return 0;
        }
    }
}


const alumni1 = new WepAlumni(0.5, 0.5, false);
console.log("Salary for alumni1:", alumni1.getSalary()); 

const alumni2 = new WepAlumni(1, 0.5, false);
console.log("Salary for alumni2:", alumni2.getSalary()); 

const alumni3 = new WepAlumni(2, 2, false);
console.log("Salary for alumni3:", alumni3.getSalary()); 

const alumni4 = new WepAlumni(2, 2, true);
console.log("Salary for alumni4:", alumni4.getSalary());

