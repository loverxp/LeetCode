// https://leetcode-cn.com/problems/subarray-sum-equals-k/
var Test = require('../Common/Test');

var subarraySum = function (nums, k) {
    const freq = new Map();
    freq.set(0, 1);
    let pre = 0, count = 0;
    for (const num of nums) {
        pre += num;
        if (freq.has(pre - k)) {
            count += freq.get(pre - k);
        }
        if (!freq.has(pre)) {
            freq.set(pre, 0);
        }
        freq.set(pre, freq.get(pre) + 1);
    }
    return count;
};

function run(nums, k) {
    Test.run(subarraySum, nums, k);
}

run([1, 1, 1], 2);
