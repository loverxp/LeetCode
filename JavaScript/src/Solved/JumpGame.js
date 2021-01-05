// https://leetcode-cn.com/problems/jump-game/
var Test = require('../Common/Test');

var canJump = function (nums) {
    let maxPosition = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i <= maxPosition) {
            maxPosition = Math.max(maxPosition, i + nums[i]);
            if (maxPosition >= nums.length - 1) {
                return true;
            }
        }
    }
    return false;
};

function test(nums) {
    Test.test(canJump, nums);
}

test([0]);
test([2, 3, 1, 1, 4]);
test([3, 2, 1, 0, 4]);