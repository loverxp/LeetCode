// https://leetcode-cn.com/problems/range-sum-query-mutable/
var Test = require('../../Common/Test');

var NumArray = function (nums) {
    this.n = nums.length;
    this.tree = buildTree(nums);

    function buildTree(nums) {
        const n = nums.length;
        const tree = Array(n);
        for (let i = 0; i < n; i++) {
            tree[n + i] = nums[i];
        }
        for (let i = n - 1; i > 0; i--) {
            tree[i] = tree[i * 2] + tree[i * 2 + 1];
        }
        return tree;
    }
};

NumArray.prototype.update = function (i, val) {
    i = this.n + i;
    const diff = val - this.tree[i];
    do {
        this.tree[i] += diff;
        i = Math.trunc(i / 2);
    } while (i > 0);
};

NumArray.prototype.sumRange = function (i, j) {
    const n = this.n;
    i += n;
    j += n;
    let sum = 0;
    while (i <= j) {
        if (i % 2 == 1) {
            sum += this.tree[i++];
        }
        if (j % 2 == 0) {
            sum += this.tree[j--];
        }
        i = Math.trunc(i / 2);
        j = Math.trunc(j / 2);
    }
    return sum;
}


function test(ops, params) {
    Test.testWithInstructions(NumArray, ops, params);
}

test(["NumArray", "sumRange", "update", "sumRange"],
    [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]);
test(["NumArray", "sumRange", "update", "sumRange"],
    [[[2, 4, 5, 7, 8, 9]], [0, 2], [1, 2], [0, 2]]);