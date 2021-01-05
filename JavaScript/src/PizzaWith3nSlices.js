// https://leetcode-cn.com/problems/pizza-with-3n-slices/
var Test = require('./Common/Test');

var maxSizeSlices = function (slices) {

    const n = slices.length / 3;
    // const maxes = Array(slices.length).fill(0);
    const maxes = slices.slice(0, 3);
    // for (let i = 1; i < n - 1; i++) {

    // }
    return maxes;
};

function test(slices) {
    Test.test(maxSizeSlices, slices);
}

test([1, 2, 3, 4, 5, 6]);
test([8, 9, 8, 6, 1, 1]);
test([4, 1, 2, 5, 8, 3, 1, 9, 7]);
test([3, 1, 2]);