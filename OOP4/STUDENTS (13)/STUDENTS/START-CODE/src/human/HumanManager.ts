import { Disease } from "../medical/Disease";
import { Patient } from "./patient/Patient";
import { Doctor } from "./staff/Doctor";
import { Staff, StaffCategory } from "./staff/Staff";

export class HumanManager {
  private patients: Patient[] = [];
  private staffs: Staff[] = [];

  adddPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getdPatients() {
    return this.patients;
  }

  addStaff(staff: Staff) {
    this.staffs.push(staff);
  }

  getStaffs() {
    return this.staffs;
  }

  /**
   *
   * @returns the first doctor found among the staff, having the given disease as speciality
   */
  getADoctorWithSkill(disease: Disease): Doctor | undefined {
    return undefined; //TODO
  }
}
