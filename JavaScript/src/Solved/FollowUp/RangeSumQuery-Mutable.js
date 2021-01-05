// https://leetcode-cn.com/problems/range-sum-query-mutable/
var Test = require('../../Common/Test');

var NumArray = function (nums) {
    this.nums = nums;
};

NumArray.prototype.update = function (i, val) {
    this.nums[i] = val;
};

NumArray.prototype.sumRange = function (i, j) {
    let sum = 0;
    for (let x = i; x <= j; x++) {
        sum += this.nums[x];
    }
    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

function test(ops, params) {
    Test.testWithInstructions(NumArray, ops, params);
}

test(["NumArray", "sumRange", "update", "sumRange"],
    [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]);