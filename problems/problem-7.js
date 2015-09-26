var nthPrime = require('../functions/nthPrime');
var log = require('../lib/colorLog');

log(nthPrime(10001));
log.green(nthPrime.getPrimesArray());
