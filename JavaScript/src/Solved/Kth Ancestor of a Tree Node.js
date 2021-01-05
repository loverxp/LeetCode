// https://leetcode-cn.com/problems/kth-ancestor-of-a-tree-node/
var Test = require('../Common/Test');

var TreeAncestor = function (n, parents) {
    const dp = parents.map(parent => [parent]);
    // console.log({ dp });
    let j = 0;
    while (true) {
        ++j;
        let allRoot = true;
        for (let i = 0; i < n; i++) {
            let t = dp[i][j - 1] != -1 ? dp[dp[i][j - 1]][j - 1] : -1;
            dp[i].push(t);
            allRoot &= t == -1;
        }
        if (allRoot) break;
    }
    this.dp = dp;
};

TreeAncestor.prototype.getKthAncestor = function (node, k) {
    if (k == 0 || node == -1) return node;
    const pos = Math.trunc(Math.log2(k));
    return pos < this.dp[node].length ? this.getKthAncestor(this.dp[node][pos], k - (1 << pos)) : -1;
}

function sequenceTest(ops, params) {
    Test.testWithInstructions(TreeAncestor, ops, params);
}

sequenceTest(["TreeAncestor", "getKthAncestor", "getKthAncestor", "getKthAncestor"],
    [[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]]);
