// https://leetcode-cn.com/problems/find-median-from-data-stream/
var Test = require('../Common/Test');

var MedianFinder = function () {
    this.nums = [];
};

MedianFinder.prototype.addNum = function (num) {
    const i = this.nums.findIndex(n => num < n);
    if (i == -1) {
        this.nums.push(num);
    }
    else {
        this.nums.splice(i, 0, num);
    }
};

MedianFinder.prototype.findMedian = function () {
    if (this.nums.length > 0) {
        if (this.nums.length % 2 == 0) {
            const i = this.nums.length / 2;
            return (this.nums[i] + this.nums[i - 1]) / 2;
        }
        else {
            const i = Math.trunc(this.nums.length / 2);
            return this.nums[i];
        }
    }
    else {
        return 0;
    }
};

function test(ops, params) {
    Test.testWithInstructions(MedianFinder, ops, params);
}

test(["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
    [[], [1], [2], [], [3], []]);