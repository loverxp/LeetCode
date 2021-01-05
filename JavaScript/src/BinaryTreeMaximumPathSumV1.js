// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
var Test = require('./Common/Test');
var { BinaryTree: Tree } = require('./Common/BinaryTree');

var maxPathSum = function (root) {
    let max = -Infinity;
    dfs(root);
    return max;

    function dfs(node) {
        if (node) {
            let left = dfs(node.left);
            let right = dfs(node.right);
            left = left > 0 ? left : 0;
            right = right > 0 ? right : 0;

            max = Math.max(max, node.val + left + right);
            return node.val + Math.max(left, right);
        }
        return 0;
    }
};

function test(root) {
    Test.test(maxPathSum, Tree.fromArray(root));
}

test([1, 2, 3]);
test([-10, 9, 20, null, null, 15, 7]);
test([2, -1]);