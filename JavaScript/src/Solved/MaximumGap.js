// https://leetcode-cn.com/problems/maximum-gap/
var Test = require('../Common/Test');

var maximumGap = function (nums) {
    if (nums.length < 2) return 0;
    nums.sort((a, b) => a - b);
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[i - 1]));
    }
    return max;
};

function test(nums) {
    Test.test(maximumGap, nums);
}

test([3, 6, 9, 1]);
test([10]);