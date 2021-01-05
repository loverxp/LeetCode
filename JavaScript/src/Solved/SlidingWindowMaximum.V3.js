// https://leetcode-cn.com/problems/sliding-window-maximum/
var Test = require('../Common/Test');
const { max } = require('lodash');

var maxSlidingWindow = function (nums, k) {
    const maxQueue = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < n) {
            maxQueue.pop();
        }
        maxQueue.push(n);
        if (i >= k - 1) {
            result.push(maxQueue[0]);
            if (maxQueue[0] == nums[i - k + 1]) {
                maxQueue.shift();
            }
        }
    }

    return result;
};

// maxes.push(nums.reduce((a, b) => a > b ? a : b, 0));

function test(nums, k) {
    Test.test(maxSlidingWindow, nums, k);
}

test([1, 3, -1, -3, 5, 3, 6, 7], 3);
test([1, 3, -1, -3, 5, 3, 6, 7], 1);
test([1], 1);
test([1, -1], 1);
test([7, 2, 4], 2);

// [1, 3, -1, -3, 5, 3, 6, 7]
// 3
// [1, 3, -1, -3, 5, 3, 6, 7]
// 1
// [1]
// 1
// [1, -1]
// 1
// [7, 2, 4]
// 2
