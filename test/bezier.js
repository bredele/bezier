
/**
 * Test dependencies.
 */

var assert = require('assert');
var bezier = require('..');

describe("bezier", function() {

	describe("linear", function() {

		it("2-3", function() {
			var linear = bezier(2, 3);


			assert.equal(linear(0), 2);
			assert.equal(linear(0.5), 2.5);
			assert.equal(linear(1), 3);
		});
		
	});

	describe("quadratic", function() {
		it("0-2-3", function() {
			var quadratic = bezier(0, 2, 3);


			assert.equal(quadratic(0), 0);
			assert.equal(quadratic(0.5), 1.75);
			assert.equal(quadratic(1), 3);
		});
		
	});

	describe("cubic", function() {
		it("1-2-3-5", function() {
			var cubic = bezier(1, 2, 3, 5);


			assert.equal(cubic(0), 1);
			assert.equal(cubic(0.5), 2.625);
		});
		
	});
	
});
