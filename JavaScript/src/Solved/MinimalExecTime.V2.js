// https://leetcode-cn.com/problems/er-cha-shu-ren-wu-diao-du/
var Test = require('./Common/Test');
var { BinaryTree } = require('./Common/BinaryTree');


var minimalExecTime = function (root) {
    const [v1, v2] = dfs(root);
    return v1 + v2;

    function dfs(node) {
        if (node) {
            const [l1, l2] = dfs(node.left);
            const [r1, r2] = dfs(node.right);

            const offset = l1 > r1 ? Math.min(l1 - r1, r2 * 2) : Math.min(r1 - l1, l2 * 2);
            return [node.val + Math.abs(l1 - r1) - offset, l2 + r2 + Math.min(l1, r1) + offset / 2];
        }
        else {
            return [0, 0];
        }
    }
}


function run(root) {
    Test.logArgs = false;
    Test.run(minimalExecTime, BinaryTree.fromArray(root));
}

function testWithTestcase(id) {
    // Test.logArgs = false;
    Test.testWithTestcaseV2(function (root) {
        // console.log(root.length);
        root = BinaryTree.fromArray(root);
        // console.log(root);
        return minimalExecTime(root);
    }, id);
}


// run([47, 74, 31]);
// run([15, 21, null, 24, null, 27, 26]);
// run([1, 3, 2, null, null, 4, 4]);
// run([1, 3, 2, null, null, 4, 5]);
// run([2, 6, 4, null, null, 8, 8])

//149
// run([75, null, 18, null, 20, 27, 36]);
//74
// run([18, null, 20, 27, 36])

//24164.0
// testWithTestcase(112626447);

//4627.5
// testWithTestcase(112636998)

// [47, 74, 31]
// [1, 3, 2, null, null, 4, 5]
//  [2,6,4,null,null,8,8]
// [1, 3, 2, null, null, 4, 5]

