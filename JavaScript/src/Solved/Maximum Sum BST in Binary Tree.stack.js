// https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
var Test = require('./Common/Test');
var { BinaryTree } = require('./Common/BinaryTree');

var maxSumBST = function (root) {
    const stack = [root];

    while (stack.length) {
        const { left, right, val } = node = stack[stack.length - 1];
        switch (true) {
            case left && !left.done:
                stack.push(left);
                break;

            case right && !right.done:
                stack.push(right);
                break;

            default: {
                if ((!left || (left.isBST && val > left.maxRight)) && (!right || (right.isBST && val < right.minLeft))) {
                    node.isBST = true;
                    node.sum = val + (left ? left.sum : 0) + (right ? right.sum : 0);
                    node.maxSum = Math.max(node.sum, left ? left.maxSum : 0, right ? right.maxSum : 0);
                    node.maxRight = right ? right.maxRight : val;
                    node.minLeft = left ? left.minLeft : val;
                }
                else {
                    node.isBST = false;
                    node.maxSum = Math.max(0, left ? left.maxSum : 0, right ? right.maxSum : 0);
                }
                node.done = true;
                delete node.left;
                delete node.right;
                stack.pop();
                break;
            }
        }
    }
    return root.maxSum;
};

function run(arr) {
    Test.logArgs = false;
    Test.run(maxSumBST, BinaryTree.fromArray(arr));
}

run([1, 4, 3, 2, 4, 2, 5, null, null, null, null, null, null, 4, 6]);
run([2, 1, 3])
run([5, 4, 8, 3, null, 6, 3])
run([4, 3, null, 1, 2])
run([-4, -2, -5])
run([-4, -5, -2])
run([4, 8, null, 6, 1, 9, null, -5, 4, null, null, null, -3, null, 10]);
run([1, null, 10, -5, 20])