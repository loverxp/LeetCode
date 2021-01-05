// https://leetcode-cn.com/problems/kth-ancestor-of-a-tree-node/
var Test = require('./Common/Test');

var TreeAncestor = function (n, parents) {
    this.n = n;
    this.parents = [[]];

    for (let i = 1; i < n; i++) {
        const parent = parents[i];
        this.parents.push([parent, ...this.parents[parent]]);
    }
};

TreeAncestor.prototype.getKthAncestor = function (node, k) {
    const parents = this.parents[node];
    return --k < parents.length ? parents[k] : -1;
}

function sequenceTest(ops, params) {
    Test.testWithInstructions(TreeAncestor, ops, params);
}

sequenceTest(["TreeAncestor", "getKthAncestor", "getKthAncestor", "getKthAncestor"],
    [[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]]);
