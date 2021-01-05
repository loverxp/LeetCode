// https://leetcode-cn.com/problems/sliding-window-maximum/
var Test = require('../Common/Test');
const { max } = require('lodash');

var maxSlidingWindow = function (nums, k) {

    class MaxWindow {
        window = [];

        max() {
            return this.window[0];
        }

        push(n) {
            while (this.window.length > 0 && this.window[this.window.length - 1] < n) {
                this.window.pop();
            }
            this.window.push(n);
        }

        pop(n) {
            if (this.window[0] == n) {
                this.window.shift();
            }
        }
    }

    const maxWindow = new MaxWindow();
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        maxWindow.push(nums[i]);
        if (i >= k - 1) {
            result.push(maxWindow.max());
            maxWindow.pop(nums[i - k + 1]);
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
