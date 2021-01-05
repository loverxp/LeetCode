// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
var Tree = require('../Common/BinaryTree').BinaryTree;
var Test = require('../Common/Test');

var inorderTraversal = function (root) {
    if (root == null) return [];
    const array = [];
    const stack = [root];

    while (stack.length > 0) {
        console.log(array);
        console.log(stack);

        const node = stack.pop();
        if (node.right != null) {
            stack.push(node.right);
        }
        if (node.left == null) {
            array.push(node.val);
        }
        else {
            stack.push(node);
            stack.push(node.left);
            node.left = null;
            node.right = null;
        }
    }
    return array;
};

function test(input) {
    Test.test(inorderTraversal, Tree.fromArray(input));
}

// test([1, null, 2, 3]);
test([]);
