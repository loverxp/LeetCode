// https://leetcode-cn.com/problems/reverse-subarray-to-maximize-array-value/
var Test = require('./Common/Test');

var maxValueAfterReverse = function (nums) {

    let total = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        total += Math.abs(nums[i] - nums[i + 1]);
    }
    return total;
};

function test(nums) {
    Test.test(maxValueAfterReverse, nums);
}


test([2, 5, 1, 3, 4]);
test([2, 4, 9, 24, 2, 1, 10]);