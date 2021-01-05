// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
var Test = require('../../Common/Test');

var countSmaller = function (nums) {
    for (let i = 0; i < nums.length ; i++) {
        const val = nums[i];
        nums[i] = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < val) {
                nums[i]++;
            }
        }
    }
    return nums;
}

function test(nums) {
    Test.test(countSmaller, nums);
}

test([]);
test([5, 2, 6, 1]);