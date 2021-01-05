// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
var Tree = require('../Common/BinaryTree').BinaryTree;
var Test = require('../Common/Test');

var postorderTraversal = function (root) {
    const array = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack[stack.length - 1];
        if (node != null) {
            if (node.left == null && node.right == null) {
                array.push(node.val);
                stack.pop();
            }
            else {
                stack.push(node.right);
                stack.push(node.left);
                node.left = null;
                node.right = null;
            }
        }
        else{
            stack.pop();
        }
    }
    return array;
};

function test(input) {
    Test.test(postorderTraversal, Tree.fromArray(input));
}

input = [1, null, 2, 3];

test(input);