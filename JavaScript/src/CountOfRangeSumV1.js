// https://leetcode-cn.com/problems/count-of-range-sum/
var Test = require('./Common/Test');

var countRangeSum = function (nums, lower, upper) {
    const between = num => num >= lower && num <= upper;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            if (between(sum += nums[j])) count++;
        }
    }
    return count;
};

function run(nums, lower, upper) {
    Test.run(countRangeSum, nums, lower, upper);
}

run([-2, 5, -1], -2, 2);
