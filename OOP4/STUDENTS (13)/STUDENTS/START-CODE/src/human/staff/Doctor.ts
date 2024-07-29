import { Disease } from "../../medical/Disease";
import { Gender, Person } from "../Person";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Doctor extends Person {
  private speciality?: Disease;

  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);
  }

  hasSpeciality(): boolean {
    return this.speciality !== undefined;
  }

  setSpeciality(speciality: Disease) {
    this.speciality = speciality;
  }

  getSpeciality() {
    return this.speciality;
  }
}
