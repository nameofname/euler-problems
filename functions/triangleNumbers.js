"use strict";

var triangles = {
    1 : 1
};
var highestNth = 1;

/**
 * A triangle number is produced by adding the natural numbers sequentially, so the 3rd triangle number is :
 *      1 + 2 + 3 = 5
 * Here I store all encountered triangle numbers as I generate them in a map called triangles. If I encounter a number
 * in the map while looping downwards I add it and stop going.
 * @param nth
 * @returns {*}
 */
var triangleNumbers = function (nth) {

    if (nth < highestNth) {
        return triangles[nth];
    }

    for (var i = (highestNth + 1); i <= nth; i++) {
        triangles[i] = triangles[i - 1] + i;
    }

    highestNth = nth;

    return triangles[nth];
};


var triangleNumbers1 = function (n) {
    return (n * (n+1)) / 2;
};

module.exports = triangleNumbers1;
