// retrieving required modules
var Shape = require("./shape");

// Pentagon constructor
var Pentagon = function(side1, side2, side3, side4, side5) {
	if (!(this instanceof Pentagon)) {
		return new Pentagon(side1, side2, side3, side4, side5);
	}
	this.type = "Pentagon";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}

// copy all the prototype methods from Shape to Pentagon
Pentagon.prototype = Object.create(Shape.prototype);

// reset Pentagon constructor from Shape constructor to Pentagon constructor
Pentagon.prototype.constructor = Pentagon;

// module to be exported
module.exports = Pentagon;