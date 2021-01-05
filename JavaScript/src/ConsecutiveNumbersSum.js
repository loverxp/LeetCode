// https://leetcode-cn.com/problems/consecutive-numbers-sum/
var Test = require('./Common/Test');

var consecutiveNumbersSum = function (n) {
    let count = 0;
    for (let i = 0; i * i - i < n * 2; i++) {
        if (((n * 2) - (i - 1) * i) % (i * 2) == 0) count++;
    }
    return count;
};

function test(n) {
    Test.test(consecutiveNumbersSum, n);
}

test(9);
test(10);
test(10 ** 9);
