
/**
 * Module dependencies.
 */

var bernstein = require('bernstein');


/**
 * Expose 'Mod'
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

