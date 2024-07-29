import Square from "./square";
import Rectangle from "./rectangle";
import Circle from "./circle";
import Triangle from "./triangle";

const square = new Square(0, 0, 5);
console.log("Square Width:", square.getWidth());
console.log("Square Height:", square.getHeight());
console.log("Square Area:", square.getArea());

const rectangle = new Rectangle(0, 0, 8, 6);
console.log("Rectangle Width:", rectangle.getWidth());
console.log("Rectangle Height:", rectangle.getHeight());
console.log("Rectangle Area:", rectangle.getArea());

const circle = new Circle(0, 0, 5);
console.log("Circle Width:", circle.getWidth());
console.log("Circle Height:", circle.getHeight());
console.log("Circle Area:", circle.getArea());

const triangle = new Triangle(0, 0, 4, 3);
console.log("triangle Width:", triangle.getWidth());
console.log("triangle Height:", triangle.getHeight());
console.log("triangle Area:", triangle.getArea());
