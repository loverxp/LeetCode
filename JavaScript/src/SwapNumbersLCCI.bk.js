// https://leetcode-cn.com/problems/swap-numbers-lcci/
var Test = require('./Common/Test');

var swapNumbers = function ([a, b]) {
    a ^= b;
    b ^= a;
    a ^= b;
    return [a, b];
};

function test(numbers) {
    Test.test(swapNumbers, numbers);
}

test([1, 2]);
test([5, 7]);