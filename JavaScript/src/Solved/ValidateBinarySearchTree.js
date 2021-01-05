// https://leetcode-cn.com/problems/validate-binary-search-tree/
var Test = require('../Common/Test');
var Tree = require('../Common/BinaryTree').BinaryTree;

var isValidBST = function (root) {
    const stack = [root];
    const serialized = [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node) {
            if (!node.left && !node.right) {
                serialized.push(node.val);
            }
            else {
                stack.push(node.right);
                stack.push(node);
                stack.push(node.left);
                node.left = null;
                node.right = null;
            }
        }
    }
    for (let i = 0; i < serialized.length - 1; i++) {
        if (serialized[i] >= serialized[i + 1]) return false;
    }
    return true;
}

function test(root) {
    root = Tree.fromArray(root);
    Test.test(isValidBST, root);
}


test([2, 1, 3]);
// test([5, 1, 4, null, null, 3, 6]);
// test([10, 5, 15, null, null, 6, 20]);
// [2,1,3]
// [5, 1, 4, null, null, 3, 6]
// [10, 5, 15, null, null, 6, 20]

// [1,1]
// [2147483647]
// [-2147483648,-2147483648]