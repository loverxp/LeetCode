// https://leetcode-cn.com/problems/constrained-subsequence-sum/
var Test = require('../Common/Test');
var { Monotone } = require('../Common/Monotone');

class Monotone extends Array {
    constructor(compare, ...args) {
        super(...args);
        this.compare = compare;
        // this.pointer = 0;
    }

    push(...items) {
        for (const item of items) {
            while (this.length && this.compare(item, this[this.length - 1])) {
                this.pop();
            }
            super.push(item);
        }
        return this.length;
    }

    first() {
        return this[0];
    }

    last() {
        return this[this.length - 1];
    }
}

var constrainedSubsetSum = function (nums, k) {
    const n = nums.length;
    const monotone = new Monotone((a, b) => a > b);
    monotone.push(nums[0]);
    for (let i = 1; i < k; i++) {
        const max = monotone.first();
        if (max > 0) nums[i] += max;
        monotone.push(nums[i]);
    }

    for (let i = k; i < n; i++) {
        console.log();
        console.log(monotone);
        const max = monotone.first();
        if (max > 0) nums[i] += max;
        monotone.push(nums[i]);

        if (nums[i - k] == monotone.first()) {
            monotone.shift();
        }
    }
    console.log({ nums });
    return Math.max(...nums);
};

function run(nums, k) {
    Test.run(constrainedSubsetSum, nums, k);
}

run([10, 2, -10, 5, 20], 2)
// run([-1, -2, -3], 1)
// run([10, -2, -10, -5, 20], 2)

// run([100, 2, -10, 5, -7, 20], 2)
// run([100, -2, 10, -11, -7, 20], 2)
// run([100, -2, 10, -11, -7, 20], 3)
// run([100, -20, 10, -11, -7, 20], 3)
// run([100, -2, -10, -11, -7, 20], 2)
// run([100, 100, -300, -320, 10, 10, 10], 2);


// run([-10, -20, 10, -11, -7, 20], 2)     //23