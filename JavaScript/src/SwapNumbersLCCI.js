// https://leetcode-cn.com/problems/swap-numbers-lcci/
var Test = require('./Common/Test');

var swapNumbers = function (numbers) {
    numbers[0] ^= numbers[1];
    numbers[1] ^= numbers[0];
    numbers[0] ^= numbers[1];
    return numbers;
};

function test(numbers) {
    Test.test(swapNumbers, numbers);
}

test([1, 2]);
test([5, 7]);