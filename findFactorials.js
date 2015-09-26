var factorials = {
    0 : 1
};
var lastUsedNum = 0;

var _nextFactorial = function () {
    var last = lastUsedNum;
    lastUsedNum ++;
    factorials[lastUsedNum] = factorials[last] * lastUsedNum;
};

var findFactorial = function (nth) {
    while (lastUsedNum <= nth) {
        _nextFactorial();
    }
    return factorials[nth];
};

module.exports = findFactorial;