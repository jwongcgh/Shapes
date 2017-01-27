
// retrieving required modules
var Shape = require("./shape");

// Triangle constructor
var Triangle = function(side1, side2, side3) {
	if (!(this instanceof Triangle)) {
		return new Triangle(side1, side2, side3);
	}
	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

// copy all the prototype methods from Shape to Triangle
Triangle.prototype = Object.create(Shape.prototype);

// reset Pentagon constructor from Shape constructor to Triangle constructor
Triangle.prototype.constructor = Triangle;

// module to be exported
module.exports = Triangle;