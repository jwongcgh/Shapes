// retrieving required modules
var Shape = require("./shape");

// Square constructor
var Square = function(side) {
	if (!(this instanceof Square)) {
		return new Square(side);
	}

	this.type = "Square";
	this.side = side;
}

// copy all the prototype methods from Shape to Square
Square.prototype = Object.create(Shape.prototype);

// reset Pentagon constructor from Shape constructor to Square constructor
Square.prototype.constructor = Square;

// module to be exported
module.exports = Square;