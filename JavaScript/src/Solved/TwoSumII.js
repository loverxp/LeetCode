// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
var Test = require('./Common/Test');

var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const other = target - num;
        if (map.has(other)) {
            return [map.get(other) + 1, i + 1];
        }
        map.set(num, i);
    }
};

function run(nums, target) {
    Test.run(twoSum, nums, target);
}

run([2, 7, 11, 15], 9);

