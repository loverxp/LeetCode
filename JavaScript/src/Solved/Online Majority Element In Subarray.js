// https://leetcode-cn.com/problems/online-majority-element-in-subarray/
var Test = require('../Common/Test');
// var { Counter } = require('./Common/Counter');
class Counter extends Map {
    inc(key, count) {
        count = undefined != count ? count : 1;
        if (!this.has(key)) {
            this.set(key, count);
        }
        else {
            this.set(key, this.get(key) + count);
        }
    }

    dec(key) {
        const count = this.get(key);
        if (count > 1) {
            this.set(key, count - 1);
        }
        else {
            this.delete(key);
        }
    }

    get(key) {
        return this.has(key) ? super.get(key) : 0;
    }
}

function combineCounter(counter1, counter2) {
    const counter = new Counter(counter1);
    for (const [key, count] of counter2) {
        counter.inc(key, count);
    }
    return counter;
}

function buildSegmentTree(nums) {
    const n = nums.length;
    const tree = [];
    for (let i = 0; i < n; i++) {
        const counter = new Counter();
        counter.inc(nums[i]);
        tree[n + i] = counter;
    }
    for (let i = n - 1; i > 0; i--) {
        tree[i] = combineCounter(tree[i * 2], tree[i * 2 + 1]);
    }
    return tree;
}

var MajorityChecker = function (nums) {
    this.n = nums.length;
    this.tree = buildSegmentTree(nums);
};

MajorityChecker.prototype.query = function (left, right, threshold) {
    const n = this.n;
    left += n;
    right += n;
    let counter;
    while (left <= right) {
        if (left % 2 == 1) {
            counter = combineCounter(counter, this.tree[left++]);
        }
        if (right % 2 == 0) {
            counter = combineCounter(counter, this.tree[right--]);
        }
        left = Math.trunc(left / 2);
        right = Math.trunc(right / 2);
    }
    for (const [num, count] of counter) {
        if (count >= threshold) {
            return num;
        }
    }
    return -1;
};

function runInSequence(ops, params) {
    Test.runWithInstructions(MajorityChecker, ops, params);
}

runInSequence(["MajorityChecker", "query", "query", "query"], [[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]);