// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
var Test = require('./Common/Test');
var { BinaryTree: Tree } = require('./Common/BinaryTree');

// Tree.prototype.sum = 0;
// Tree.prototype.max = 0;

// const value = node.val + Math.max(0, lValue, rValue);
// const max = Math.max(node.val + Math.max(0, lValue) + Math.max(0, rValue), lMax, rMax);

var maxPathSum = function (root) {
    const stack = [root];
    const valueStack = [];
    // const result = [];
    let max = -Infinity;

    while (stack.length > 0) {
        const node = stack[stack.length - 1];
        if (node) {
            if (node.left || node.right) {
                stack.push(node.right);
                stack.push(node.left);
                node.left = null;
                node.right = null;
                // node.
            }
            else {
                // result.push(node.val);
                // max = Math.max(max, node.val);

                stack.pop();
            }
        }
        else {
            // valueStack.push()
            stack.pop();
        }
    }
    // return result;
};

function test(root) {
    Test.test(maxPathSum, Tree.fromArray(root));
}

test([1, 2, 3]);
// test([-10, 9, 20, null, null, 15, 7]);