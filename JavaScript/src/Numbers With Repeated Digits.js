// https://leetcode-cn.com/problems/numbers-with-repeated-digits/
var Test = require('./Common/Test');

var numDupDigitsAtMostN = function (n) {
    const nums = String(n).split('').sort().map(c => parseInt(c));

    return nums;
};

function run(N) {
    Test.run(numDupDigitsAtMostN, N);
}

run(20)
run(100)
run(1000)
run(2345)
run(2543)
run(2503)