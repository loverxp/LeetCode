// https://leetcode-cn.com/problems/patching-array/
var Test = require('./Common/Test');

var minPatches = function (nums, n) {
    let count = 0;
    let miss = 1;
    let i = 0;
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i++] + 1;
        }
        else {
            miss *= 2;
            count++;
        }
    }
    return count;
};

function run(nums, n) {
    Test.run(minPatches, nums, n);
}

// run([1, 3], 6)
// run([1, 5, 10], 20)
// run([1, 2, 3, 8], 80)
// run([1, 2, 2], 5)
run([1, 2, 31, 33], 2147483647);
// run([1, 2, 31, 33], 214748);
// run([1, 2, 31, 33], 1748);