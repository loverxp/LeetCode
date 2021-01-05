// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
var Test = require('./Common/Test');
var { BinaryTree: Tree } = require('./Common/BinaryTree');

var maxPathSum = function (root) {
    return dfs(root)[1];

    function dfs(node) {
        if (node) {
            const [lValue, lMax] = dfs(node.left);
            const [rValue, rMax] = dfs(node.right);
            const value = node.val + Math.max(0, lValue, rValue);
            const max = Math.max(node.val + Math.max(0, lValue) + Math.max(0, rValue), lMax, rMax);
            return [value, max];
        }
        return [0, -Infinity];
    }
};

function test(root) {
    Test.test(maxPathSum, Tree.fromArray(root));
}

test([1, 2, 3]);
test([-10, 9, 20, null, null, 15, 7]);
test([2, -1]);
test([-3]);