/*
 INSTRUCTIONS
  1 -  Create a type  Person with the following properties:
         - name      (string)
         - nationality  (string)
         - salary      (string)

  2 -  For all the functions : add the parameter types and return type

  3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/

// Define the Person type
class Person {
  name: string;
  nationality: string;
  salary: string;

  constructor(name: string, nationality: string, salary: string) {
      this.name = name;
      this.nationality = nationality;
      this.salary = salary;
  }
}

// Function to get the name of a person
function getName(person: Person): string {
  return person.name;
}

// Function to sum the salaries of two persons
function sumSalaries(person1: Person, person2: Person): string {
  return (parseFloat(person1.salary) + parseFloat(person2.salary)).toString();
}

// Function to check if a person is French
function isFrench(person: Person): boolean {
  return person.nationality === "French";
}

// Create two objects of type Person
const person1 = new Person("John Doe", "American", "50000");
const person2 = new Person("Marie Leblanc", "French", "60000");

// Test the functions
console.log("Name of person 1:", getName(person1));
console.log("Name of person 2:", getName(person2));

console.log("Sum of salaries:", sumSalaries(person1, person2));

console.log("Is person 1 French?", isFrench(person1));
console.log("Is person 2 French?", isFrench(person2));