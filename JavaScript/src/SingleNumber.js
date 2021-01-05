// https://leetcode-cn.com/problems/single-number/
var Test = require('./Common/Test');

var singleNumber = function (nums) {
    nums[0] = 1 << nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = (1 << nums[i]);
        nums[i] ^= nums[i - 1];
    }
    return nums;
    return Math.log2(nums[nums.length - 1]);
};

function test(nums) {
    Test.test(singleNumber, nums);
}

// test([2, 2, 1]);
// test([4, 1, 2, 1, 2]);
test([-1]);