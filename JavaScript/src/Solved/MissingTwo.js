// https://leetcode-cn.com/problems/missing-two-lcci/
var Test = require('../Common/Test');

var missingTwo = function (nums) {
    const n = nums.length + 3;
    nums.push(n, n, n, n);
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]);
        nums[index] = - nums[index];
    }
    const result = [];
    for (let i = 1; i < nums.length - 1; i++) {
        const num = nums[i];
        if (num > 0) {
            result.push(i);
        }
    }
    return result;
};

function test(nums) {
    Test.test(missingTwo, nums);
}
test([1]);
test([2, 3]);