/**
 * User: ronald
 * Date: 10/13/15
 * Time: 11:59 PM
 */


var passing = false;
var currItar = 0;


var factorsMap = {};

var _getFactors = function (n) {

    outerLoop :
    for (var i = Math.floor(n / 2); i > 0; i--) {

        // perhaps we should loop downwards for this purpose? Weeee?
        if ((n % i) === 0) {

            if (factorsMap[i]) {
                factorsMap[n] = factorsMap[i].concat(factorsMap[n] || []);
                break outerLoop;

            } else {

                factorsMap[n] = factorsMap[n] || [];
                factorsMap[n].push(i);
            }
        }
    }
};


while (passing === false) {

    // first, factor the current iterator.
    _getFactors(currItar);

    currItar++;
}