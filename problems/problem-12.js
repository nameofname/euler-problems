"use strict";

var passing = false;
var currTriangle = 0;
var factors = require('../functions/factors');


while (passing === false) {

    // first, factor the current iterator.
    var numFactors = factors(currTriangle).length;

    currTriangle++;
};
