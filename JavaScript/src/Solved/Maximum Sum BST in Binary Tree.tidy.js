// https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
var Test = require('./Common/Test');
var { BinaryTree } = require('./Common/BinaryTree');

var maxSumBST = function (root) {

    return traverse(root)[1];

    function traverse(node) {
        const { left, right, val } = node;

        if (!left && !right) {
            return [val, Math.max(val, 0), true];
        }
        else {
            const [lval, lSum, isLBST] = left ? traverse(left) : [-Infinity, 0, true];
            const [rval, rSum, isRBST] = right ? traverse(right) : [Infinity, 0, true];
            if (isLBST && isRBST && val > lval && val < rval) {
                return [val, Math.max(lSum, rSum, val + lSum + rSum), true];
            }
            else {
                let sum = Math.max(lSum, rSum);
                return [val, sum, false];
            }
        }
    }
};

function run(arr) {
    Test.run(maxSumBST, BinaryTree.fromArray(arr));
}

run([1, 4, 3, 2, 4, 2, 5, null, null, null, null, null, null, 4, 6]);
run([2, 1, 3])
run([5, 4, 8, 3, null, 6, 3])
run([4, 3, null, 1, 2])
run([-4, -2, -5])
run([-4, -5, -2])