import { Gender, Person } from "../Person";

/**
 * A nurse manage patient checks
 */
export class Nurse extends Person {
  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);
  }
}
