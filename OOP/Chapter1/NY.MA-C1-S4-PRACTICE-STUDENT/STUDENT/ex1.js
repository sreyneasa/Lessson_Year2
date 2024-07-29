// /*
//  INSTRUCTIONS
// 	1 -  Create a type  `Person` with the following properties:
//          - name			(string)
//          - nationality	(string)
//          - salary			(string)
// Step 2: Add parameter types and return types for functions
function getName(person) {
    return person.name;
}
function sumSalaries(person1, person2) {
    return (parseInt(person1.salary) + parseInt(person2.salary)).toString();
}
function isFrench(person) {
    return person.nationality === "French";
}
// Step 3: Create 2 objects of type 'Person' and test the functions
var person1 = {
    name: "John Doe",
    nationality: "American",
    salary: "50000",
};
var person2 = {
    name: "Marie Leblanc",
    nationality: "French",
    salary: "60000",
};
// Test the functions
console.log(getName(person1)); // Output: John Doe
console.log(sumSalaries(person1, person2)); // Output: 110000
console.log(isFrench(person1)); // Output: false
console.log(isFrench(person2)); // Output: true

