// retrieving required modules (from js external resources)
var Shape = require("./shape.js");
var Triangle = require("./triangle.js");
var Square = require("./square.js");
var Pentagon = require("./pentagon.js");

// creating instances from each constructor
var shape = new Shape();
var pentagon = new Pentagon(1,2,3,4,5);
var square = new Square(4);
var triangle = new Triangle(3,4,5);

// retrieving type of shape with get_type method from shape.js 
console.log("-----------------------------");
console.log("triangle.get_type: ");
triangle.get_type();
console.log("square.get_type: ");
square.get_type();
console.log("pentagon.get_type: ");
pentagon.get_type();

// checking new-objects instances-of
console.log("-----------------------------");
console.log("triangle instance of Triangle: " + (triangle instanceof Triangle));
console.log("triangle instance of Shape: " + (triangle instanceof Shape));
console.log("square instance of Square: " + (square instanceof Square));
console.log("square instance of Shape: " + (square instanceof Shape));
console.log("pentagon instance of Pentagon: " + (pentagon instanceof Pentagon));
console.log("pentagon instance of Shape: " + (pentagon instanceof Shape));
console.log("shape instance of Shape: " + (shape instanceof Shape));
console.log("-----------------------------");


