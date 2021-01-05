// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
var Test = require('./Common/Test');
var { BinaryTree } = require('./Common/BinaryTree');

var kthSmallest = function (root, k) {
    return inOrder(0, root)[1];

    function inOrder(start, node) {
        if (!node) {
            return [start];
        }
        else {
            const [index, result] = inOrder(start, node.left);
            if (result != undefined) {
                return [index, result];
            }
            else {
                if (index + 1 == k) {
                    return [k, node.val];
                }
                else {
                    return inOrder(index + 1, node.right)
                }
            }
        }
    }
};

function run(root, k) {
    Test.run(kthSmallest, BinaryTree.fromArray(root), k);
}

// run([3, 1, 4, null, 2], 3)
// run([5, 3, 6, 2, 4, null, null, 1], 6)
run([31, 30, 48, 3, null, 38, 49, 0, 16, 35, 47, null, null, null, 2, 15, 27, 33, 37, 39, null, 1, null, 5, null, 22, 28, 32, 34, 36, null, null, 43, null, null, 4, 11, 19, 23, null, 29, null, null, null, null, null, null, 40, 46, null, null, 7, 14, 17, 21, null, 26, null, null, null, 41, 44, null, 6, 10, 13, null, null, 18, 20, null, 25, null, null, 42, null, 45, null, null, 8, null, 12, null, null, null, null, null, 24, null, null, null, null, null, null, 9], 1)

