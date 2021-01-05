// https://leetcode-cn.com/problems/nth-magical-number/
var Test = require('../Common/Test');

var nthMagicalNumber = function (n, a, b) {
    const mod = 1e9 + 7;
    const lcm = a * b / gcd(a, b);
    const times = lcm / a + lcm / b - 1;

    let remainder = n % times;
    const quotient = (n - remainder) / times;

    let val = 0;
    let val1 = a, val2 = b;
    while (remainder-- > 0) {
        if (val1 < val2) {
            val = val1;
            val1 += a;
        }
        else {
            val = val2;
            val2 += b;
        }
    }
    return (val + quotient * lcm) % mod;

    function gcd(a, b) {
        let remainder = a;
        while (a != 0) {
            remainder = b % a;
            b = a;
            a = remainder;
        }
        return b;
    }
};

function run(n, a, b) {
    Test.run(nthMagicalNumber, n, a, b);
}

// run(1, 2, 3)
// run(4, 2, 3)
// run(5, 2, 4)
// run(3, 6, 4)
// run(1e9, 31577, 18693);
run(1e9, 31577, 38693);