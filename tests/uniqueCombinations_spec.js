"use strict";

var uniqueCombinations = require('../functions/uniqueCombinations');
var log = require('../lib/colorLog');
var uniq = uniqueCombinations;
var test = uniq([1,2,3,4,5], 3);

log.green(JSON.stringify(test));
