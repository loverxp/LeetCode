// https://leetcode-cn.com/problems/first-missing-positive/

var Test = require('../Common/Test');

var firstMissingPositive = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num > 0 && num <= n && i != num - 1) {
            let temp = nums[num - 1];
            nums[num - 1] = num;
            nums[i] = temp;
        }
        // if (num != nums[i]) {

        // }
    }
    console.log(nums);
    const index = nums.findIndex((num, i) => num != i + 1);
    return (index != -1 ? index : n) + 1;
};

function test(nums) {
    Test.test(firstMissingPositive, nums);
}

test([3, 2, 1]);
test([1, 2, 3]);
test([1, 2, 0]);
test([1, 1, 2, 0]);
test([3, 4, -1, 1]);
test([7, 8, 9, 11, 12]);