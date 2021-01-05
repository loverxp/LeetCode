// https://leetcode-cn.com/problems/longest-increasing-subsequence/
var Test = require('../../Common/Test');

var lengthOfLIS = function (nums) {
    const length = nums.length;
    if (length == 0) return 0;
    const maxes = Array(length).fill(1);
    for (let i = length - 1; i > 0; i--) {
        const max = maxes[i] + 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (max > maxes[j]) {
                    maxes[j] = max;
                }
            }
        }
    }
    return Math.max(...maxes);
};

function test(nums) {
    Test.test(lengthOfLIS, nums);
}

test([]);
test([10, 9, 2, 5, 3, 7, 101, 18]);