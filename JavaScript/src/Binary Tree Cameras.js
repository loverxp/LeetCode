// https://leetcode-cn.com/problems/binary-tree-cameras/
var Test = require('./Common/Test');
const { BinaryTree } = require('./Common/BinaryTree');

var minCameraCover = function (root) {
    return Math.min(...dfs(root).slice(0, 2));

    function dfs(node) {
        const [l, r] = [node.left, node.right];
        if (!l && !r) return [1, Infinity, 0];
        if (l && r) {
            const [cl1, cl2, cl3] = dfs(l);
            const [cr1, cr2, cr3] = dfs(r);
            const c2 = Math.min(cl1 + cr1, cl1 + cr2, cl2 + cr1);
            const c3 = cl2 + cr2;
            const c1 = Math.min(c2, c3, cl1 + cr3, cl2 + cr3, cl3 + cr1, cl3 + cr2, cl3 + cr3) + 1;
            return [c1, c2, c3];

        }
        else {
            const [c1, c2, c3] = dfs(l || r);
            return [Math.min(c1, c2, c3) + 1, c1, c2];
        }
    }
};

function run(tree) {
    const root = BinaryTree.fromArray(tree);
    Test.logArgs = false;
    Test.run(minCameraCover, root);
}


run([0])
run([0, 0, null, 0, 0])
run([0, 0, null, 0, null, 0, null, null, 0])
run([0, 0, null, null, 0, 0, null, null, 0, 0])