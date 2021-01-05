// https://leetcode-cn.com/problems/recover-a-tree-from-preorder-traversal/
var Test = require('../Common/Test');
// var { Tree } = require('./Common/BinaryTree');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var recoverFromPreorder = function (S) {
    S += '-';
    const stack = [];
    let depth = 0;
    let val = "";
    for (let i = 0; i < S.length - 1; i++) {
        if ('-' == S[i]) {
            depth++;
        }
        else {
            val += S[i];
            if (S[i + 1] == '-') {
                let top = stack[stack.length - 1];
                while (top && top[1] >= depth) {
                    stack.pop();
                    top = stack[stack.length - 1];
                }
                const node = new TreeNode(parseInt(val));
                if (top) {
                    const parent = top[0];
                    if (!parent.left) {
                        parent.left = node;
                    }
                    else {
                        parent.right = node;
                    }
                }
                stack.push([node, depth]);
                val = "";
                depth = 0;
            }
        }
    }

    return stack[0][0];
};

function run(S) {
    Test.run(recoverFromPreorder, S);
}

run("1-2--3--4-5--6--7");
// run("1-2--3---4-5--6---7");
// run("1-401--349---90--88");
run("10-7--8");