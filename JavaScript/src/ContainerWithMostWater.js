// https://leetcode-cn.com/problems/container-with-most-water/

var Test = require('./Common/Test');

var maxArea = function (height) {
    if (height.length <= 1) return 0;
};

function test(height) {
    Test.test(maxArea, height);
}

test([]);
test([8]);
test([1, 8, 6, 2, 5, 4, 8, 3, 7]);
