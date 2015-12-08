"use strict";

var passing = false;
var currIndex = 1;
var currTriangle;
var numFactors;
var factors = require('../functions/factors');
var triangles = require('../functions/triangleNumbers');
var l = require('../lib/colorLog').green;


while (passing === false) {
    l('finding triangle numbers and their factors');

    // first, factor the current iterator.
    currTriangle = triangles(currIndex);
    numFactors = factors(currTriangle).length;

    l('current number of factors for '+currTriangle+': ', numFactors);
    if (numFactors >= 500) {
        passing = true;
    }

    currIndex++;
};

l("found a triangle number with 500 factors : ", currTriangle);