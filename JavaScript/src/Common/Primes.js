function calcFactors(n) {
// function factors(n) {
    // const set = new Set();
    const result = [];
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            n /= i;
            // set.add(i);
            result.push(i);
            i--;
        }
    }
    return result;
    // return set;
}

function gcd(a, b) {
    let remainder = a;
    while (a != 0) {
        remainder = b % a;
        b = a;
        a = remainder;
    }
    return b;
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function sieve(max) {
    const isPrimes = Array(max).fill(true);
    isPrimes[0] = false;
    isPrimes[1] = false;
    const primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrimes[i]) {
            primes.push(i);
            for (let j = i + i; j <= max; j += i) {
                isPrimes[j] = false;
            }
        }
    }
    return primes;
}

exports.calcFactors = calcFactors;
exports.gcd = gcd;
exports.lcm = lcm;
exports.sieve = sieve;

// var { sieve } = require("./src/Common/Primes.js")