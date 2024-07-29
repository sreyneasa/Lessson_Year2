import { Classroom, School, Student } from "./SCHOOL";

let student1 = new Student("chin","ching");
let student2 = new Student("Rin","RIN");
let student3 = new Student("Cha","Em");
let student4 = new Student("Rath","b");


let school = new School("pnc");
let school2 = new School("pnv");


let classroom1 = new Classroom(school,"web-a");
let classroom2 = new Classroom(school,"web-b");
let classroom3 = new Classroom(school2,"2024a");
let classroom4 = new Classroom(school2,"2024b");

classroom1.addStudent(student1)
console.log(classroom1.getNumberOfStudents());
classroom2.addStudent(student2)
console.log(classroom2.getNumberOfStudents());

school.addClassroom("web-b")
console.log(school);
