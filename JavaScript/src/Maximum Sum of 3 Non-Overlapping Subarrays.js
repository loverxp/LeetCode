// https://leetcode-cn.com/problems/maximum-sum-of-3-non-overlapping-subarrays/
var Test = require('./Common/Test');

var maxSumOfThreeSubarrays = function (nums, m) {
    const n = nums.length;
    const prefix = nums.slice(0, 1);
    for (let i = 1; i < n; i++) {
        prefix.push(prefix[i - 1] + nums[i]);
    }
    let result;
    let max = 0;

    return result;
};

function run(nums, k) {
    Test.run(maxSumOfThreeSubarrays, nums, k);
}

run([1, 2, 1, 2, 6, 7, 5, 1], 2);