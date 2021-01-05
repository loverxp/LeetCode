// https://leetcode-cn.com/problems/count-of-range-sum/
var Test = require('./Common/Test');

var countRangeSum = function (nums, lower, upper) {
    const between = num => num >= lower && num <= upper;
    let count = 0;
    let loop = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            loop++;
            console.log({ i, j, sum, count });
            if (between(sum += nums[j])) count++;
        }
    }
    console.log({ loop });
    return count;
};

function run(nums, lower, upper) {
    Test.run(countRangeSum, nums, lower, upper);
}

// run([-2, 5, -1], -2, 2);
// run([-2, 5, -1, 1], -2, 2);
run([-2, 5, -1, 3, -2], -2, 2);
