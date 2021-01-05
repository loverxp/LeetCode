// https://leetcode-cn.com/problems/jump-game-ii/
var Test = require('../Common/Test');

var jump = function (nums) {
    let len = nums.length - 1;
    let maxPosition = 0;
    let next = 0;
    let steps = 0;

    for (let i = 0; i < len; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i == next) {
            next = maxPosition;
            steps++;
            // if (next >= len) {
            // return steps;
            // }
        }
    }
    return steps;
};

function test(nums) {
    Test.test(jump, nums);
    // Test.loopTest(1000000, jump, nums);
}


test([2, 3, 1, 1, 4]);
test([2, 3, 1, 2, 4, 2, 3]);
test([1, 2, 3, 4, 5]);

// [2, 3, 2, 4, 1, 5]