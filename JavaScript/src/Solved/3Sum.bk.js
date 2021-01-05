// https://leetcode-cn.com/problems/3sum/
var Test = require('./Common/Test');

var threeSum = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {

        // const map = new Map();
        const set = new Set();

        for (let j = i + 1; j < nums.length; j++) {
            const num = nums[j];
            const other = - nums[i] - num;
            // if (map.has(other)) {
            if (set.has(other)) {
                // result.push([nums[i], map.get(other), j]);
                result.push([nums[i], other, num]);
            }
            // map.set(num, j);
            set.add(num);
        }
    }
    return result;
};

function run(nums) {
    Test.run(threeSum, nums);
}

run([-1, 0, 1, 2, -1, -4]);
