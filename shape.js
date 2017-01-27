
// creating Shape constructor
var Shape = function(type) {
	// prevent using constructor without the "new" keyword
	if (!(this instanceof Shape)) {
		return new Shape();
	}

	this.type = "shape";
	} 

// adding method to Shape: returns type fo shape
Shape.prototype.get_type = function() {
	console.log(this.constructor);
}

// module to be exported
module.exports = Shape;