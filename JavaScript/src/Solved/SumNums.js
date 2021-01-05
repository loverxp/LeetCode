// https://leetcode-cn.com/problems/qiu-12n-lcof/
var Test = require('../Common/Test');

var sumNums = function (n) {
    // return [...Array(n + 1).keys()].reduce((a, b) => a + b);
    return (n + n ** 2) >> 1;
};

function test(n) {
    Test.test(sumNums, n);
}

test(3);
test(9);
test(10000);

