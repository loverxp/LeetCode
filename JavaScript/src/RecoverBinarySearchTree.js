// https://leetcode-cn.com/problems/recover-binary-search-tree/
var Test = require('./Common/Test');
var { BinaryTree } = require('./Common/BinaryTree');

var recoverTree = function (root) {

    return root;

    function traversal(node) {
        
    }
};

function test(root) {
    Test.test(recoverTree, BinaryTree.fromArray(root));
}

test([1, 3, null, null, 2]);
test([3, 1, 4, null, null, 2]);