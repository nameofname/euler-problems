"use strict";

var factorsMap = {};
var currIndexesBuilding = [];

var _getFactors = function (n) {

    factorsMap[n] = [n];

    // loop downwards so that if I encounter a factor that is already stored I can just merge that array and
    // break the loop
    outerLoop :
        for (var i = Math.floor(n / 2); i > 0; i--) {

            if ((n % i) === 0) {
                currIndexesBuilding.push(i);

                if (factorsMap[i]) {
                    factorsMap[n].push(i);
                    factorsMap[n] = factorsMap[n].concat(factorsMap[i]);
                    break outerLoop;

                } else {

                    factorsMap[n].push(i);
                }
            }
        }

    return factorsMap[n];
};

module.exports = _getFactors;
