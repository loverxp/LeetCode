// https://leetcode-cn.com/problems/dinner-plate-stacks/
var Test = require('../Common/Test');

var DinnerPlates = function (capacity) {
    this.capacity = capacity;
    this.stacks = [];
    this.indexes = [];
};

DinnerPlates.prototype.push = function (val) {
    if (this.indexes.length > 0) {
        const index = this.indexes[0];
        const stack = this.stacks[index];
        stack.push(val);
        if (stack.length == this.capacity) {
            this.indexes.shift();
        }
    }
    else {
        if (this.capacity > 1) {
            this.indexes.push(this.stacks.length);
        }
        this.stacks.push([val]);
    }
};

DinnerPlates.prototype.pop = function () {
    let lastStack;
    while (this.stacks.length > 0) {
        const stack = this.stacks[this.stacks.length - 1];
        if (stack.length > 0) {
            lastStack = stack;
            break;
        }
        else {
            this.stacks.pop();
            this.indexes.pop();
        }
    }
    if (lastStack) {
        if (lastStack.length == this.capacity) {
            // this.insertIndex(this.stacks.length - 1);
            this.indexes.push(this.stacks.length - 1);
        }
        return lastStack.pop();
    }
    else {
        return -1;
    }
};

DinnerPlates.prototype.popAtStack = function (index) {
    const stack = this.stacks[index];
    if (!stack || stack.length == 0) {
        return -1;
    }
    else {
        if (stack.length == this.capacity) {
            this.insertIndex(index);
        }
        return stack.pop();
    }
};

DinnerPlates.prototype.insertIndex = function (index) {
    const i = this.indexes.findIndex(i => index < i);
    if (i != -1) {
        this.indexes.splice(i, 0, index);
    }
    else {
        this.indexes.push(index);
    }
}


/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */

function test(ops, params) {
    Test.testWithInstructions(DinnerPlates, ops, params);
}

// test(["DinnerPlates", "push", "push", "push", "push", "push", "popAtStack", "push", "push", "popAtStack", "popAtStack", "pop", "pop", "pop", "pop", "pop"],
// [[2], [1], [2], [3], [4], [5], [0], [20], [21], [0], [2], [], [], [], [], []]);
test(["DinnerPlates", "push", "push", "push", "popAtStack", "pop", "pop"],
    [[1], [1], [2], [3], [1], [], []]);

// ["DinnerPlates", "push", "push", "push", "push", "push", "popAtStack", "push", "push", "popAtStack", "popAtStack", "pop", "pop", "pop", "pop", "pop"]
// [[2], [1], [2], [3], [4], [5], [0], [20], [21], [0], [2], [], [], [], [], []]
["DinnerPlates", "push", "push", "push", "popAtStack", "pop", "pop"]
[[1], [1], [2], [3], [1], [], []]