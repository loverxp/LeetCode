// https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
var Test = require('../Common/Test');

var numberOfSubarrays = function (nums, k) {
    const freq = new Map();
    freq.set(0, 1);
    let pre = 0, count = 0;
    for (const num of nums) {
        if (num % 2 == 1) pre++;
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
    Test.run(numberOfSubarrays, nums, k);
}

run([1, 1, 2, 1, 1], 3);
run([2, 4, 6], 1);
run([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2);