var primes = [0, 1];
var latestNumbers = {};
var notPrimes = {};
var targetLength;
var currentPotentialPrime;
var currentCounter;
var limit = 0;
var shiterations = 0;

function _findMorePrimes () {

    // Do the loop starting at the number 2 :
    // loop up to half the limit - because the inner loop adds the current potential to itself, so once you are
    // at 1/2 the limit you will automatically go over the limit  by adding
    for (currentPotentialPrime = 2; currentPotentialPrime <= (limit / 2); currentPotentialPrime++) {

        // here is where we check the not primes array against the current potential. if the number was not a prime
        // it would have been encountered in the while loop below :
        if (notPrimes[currentPotentialPrime] !== true) {
            primes.push(currentPotentialPrime);
        }

        // for each potential prime, start at the last encountered test number. This way we don't have to start all
        // over for each test number and each time _findMorePrimes is called the list of primes builds on itself
        // without extra loops
        currentCounter = latestNumbers[currentPotentialPrime] ? latestNumbers[currentPotentialPrime] : currentPotentialPrime;

        // the inner loop increments the current potential by itself (stored in currentCounter) until you hit the
        // limit. Every number encountered is not a prime.
        while ((currentCounter + currentPotentialPrime) <= limit && primes.length < targetLength) {
            notPrimes[currentCounter] = true;
            latestNumbers[currentPotentialPrime] = currentCounter;
            currentCounter = currentCounter + currentPotentialPrime;

            shiterations++;
        }

    }
}


function findNthPrime (nth) {
    targetLength = nth;

    // execute the _findMorePrimes method until you reach the limit. each execution will start at the last number
    // tested and go up to a new limit.
    while (primes.length < targetLength) {
        limit += nth;
        _findMorePrimes();
    }

    return primes[primes.length - 1];
}

findNthPrime.getPrimesArray = function () {
    return primes;
};

module.exports = findNthPrime;