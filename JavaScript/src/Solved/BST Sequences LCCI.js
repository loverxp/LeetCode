// https://leetcode-cn.com/problems/bst-sequences-lcci/
var Test = require('../Common/Test');
const { BinaryTree } = require('../Common/BinaryTree');

var BSTSequences = function (root) {
    return dfs(root);

    function dfs(node) {
        if (!node) {
            return [[]];
        }
        else {
            const result = [];
            for (const arr1 of dfs(node.left)) {
                for (const arr2 of dfs(node.right)) {
                    for (const arr3 of permutations(arr1, arr2)) {
                        result.push([node.val, ...arr3]);
                    }
                }
            }
            return result;
        }
    }

    function permutations(arr1, arr2) {
        const [m, n] = [arr1.length, arr2.length];
        return dfs([], 0, 0);

        function dfs(prefix, i, j) {
            if (i == m && j == n) return [prefix];
            if (i == m) return [prefix.concat(arr2.slice(j))];
            if (j == n) return [prefix.concat(arr1.slice(i))];
            return [...dfs(prefix.concat([arr1[i]]), i + 1, j), ...dfs(prefix.concat([arr2[j]]), i, j + 1)];

        }
    }
};

function run(root) {
    Test.logArgs = false;
    Test.run(BSTSequences, BinaryTree.fromArray(root));
}

// run([2]);
// run([2, 1, 3]);
// run([4, 2, 5, 1, 3]);
run([4, 2, 6, 1, 3, 5, 7]);