"use strict";

var triangles = {
    1 : 1
};
var highestNth = 1;
//var l = require('../lib/colorLog').blue;

var _getTriangle = function (nth) {

    if (nth < highestNth) {
        return triangles[nth];
    }

    for (var i = (highestNth + 1); i <= nth; i++) {
        triangles[i] = triangles[i - 1] + i;
    }

    highestNth = nth;

    return triangles[nth];
    //return triangles;
};


module.exports = _getTriangle;
