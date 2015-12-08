"use strict";

var triangleNumbers = require('../functions/triangleNumbers');
var log = require('../lib/colorLog');

var test1 = triangleNumbers(7);
log.green(JSON.stringify(test1));

var test2 = triangleNumbers(20);
log.green(JSON.stringify(test2));

// some clever logging reveals that once generated a triangle number does not have to get generated again.
var test3 = triangleNumbers(5);
log.green(JSON.stringify(test3));
