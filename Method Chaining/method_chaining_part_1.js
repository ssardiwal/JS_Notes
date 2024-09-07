/*
 Method chaining is an object-oriented paradigm, in which the methods usually share
 the same reference, which in JavaScript is done by sharing
 this (current context) from each method.
*/

/**
 * There can be so many approaches
 1. Using Objects
 3. Using function as a constructor
 4. Using function closures
*/

// Using Objects
let compute = {
	amount: 0,
	hundreds: function (amountToBe) {
		this.amount = amountToBe * 100 + this.amount;
		return this;
	},
	thousands: function (amountToBe) {
		this.amount = amountToBe * 1000 + this.amount;
		return this;
	},
	value: function () {
		return this.amount;
	},
};
console.log(compute.hundreds(1).thousands(3).value());
