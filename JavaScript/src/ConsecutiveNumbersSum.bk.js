// https://leetcode-cn.com/problems/consecutive-numbers-sum/
var Test = require('./Common/Test');

var consecutiveNumbersSum = function (n) {

    let divisors = [];
    let divisorCount = 0;
    let candidate = 2;
    do {
        console.log({ candidate });
        if (n % candidate == 0) divisorCount++;
        if (n % candidate == 0) divisors.push(candidate);
    } while (candidate++ ** 2 < n);
    return divisors;
    // while(candidate**2<=n){

    // }

    // for (let i = 0; i < j; i++) {
    // const element = array[i];
    // 
    // }
    // for
    // return findDivisor(n, 2);

    function findDivisor(n, candidate) {
        switch (true) {
            // case Math.sqrt(candidate) > n: return n;
            case candidate * candidate > n: return n;
            case n % candidate == 0: return candidate;
            default: return findDivisor(n, candidate + 1);
        }
    }
};

function test(n) {
    Test.test(consecutiveNumbersSum, n);
}

// test(9);
test(10 ** 9);


function testLongFor(length) {
    Test.test(function () {
        let val = 0;
        for (let i = 0; i < 10 ** length; i++) {
            val = i;
        }
        return val;
    });
}
// testLongFor(7);
// test(8)