// https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
var Test = require('./Common/Test');

var MaxQueue = function () {
    this.queue = [];
    this.stack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this.stack.length) return this.stack[this.stack.length - 1];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (val) {
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

function sequenceTest(ops, params) {
    Test.testWithInstructions(MaxQueue, ops, params);
}

// sequenceTest(["MaxQueue", "push_back", "push_back", "max_value", "pop_front", "max_value"],
// [[], [1], [2], [], [], []]);

// sequenceTest(["MaxQueue", "pop_front", "max_value"], [[], [], []])
sequenceTest(["MaxQueue", "push_back", "push_back", "push_back", "push_back", "max_value", "pop_front", "max_value", "pop_front", "max_value", "pop_front", "max_value", "pop_front", "max_value"]
[[], [1], [2], [3], [1], [], [], [], [], [], [], [], [], []])