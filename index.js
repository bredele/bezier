
/**
 * Module dependencies.
 */

var bernstein = require('bernstein');


/**
 * Bezier curve
 * n degree.
 *
 * Examples:
 *
 *   var cubic = bezier(1,2,3);
 *   cubic(0);
 *   cubic(0.5);
 * 
 * @params {Number}
 * @return {Number}
 * @api public
 */

module.exports = function() {
  var args = arguments;
  var i = args.length;
  var n = i - 1;
  return function(t) {
    var result = 0;
    while(i--) {
      result += bernstein(i, n, t) * args[i];
    }
    i = n + 1;
    return result;
  };
};

