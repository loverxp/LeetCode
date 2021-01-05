// https://leetcode-cn.com/problems/first-missing-positive/

var Test = require('../Common/Test');

var firstMissingPositive = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) nums[i] = n + 2;
    }
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]) - 1;
        if (num < n && nums[num] > 0) nums[num] = - nums[num];
    }
    const index = nums.findIndex(num => num > 0);
    return (index != -1 ? index : n) + 1;
};

function test(nums) {
    Test.test(firstMissingPositive, nums);
}

test([1, 2, 3]);
test([1, 2, 0]);
test([1, 1, 2, 0]);
test([3, 4, -1, 1]);
test([7, 8, 9, 11, 12]);