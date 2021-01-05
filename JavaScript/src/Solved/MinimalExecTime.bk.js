// https://leetcode-cn.com/problems/er-cha-shu-ren-wu-diao-du/
var Test = require('../Common/Test');
var { BinaryTree } = require('../Common/BinaryTree');
var { Heap } = require('../Common/Heap');

var minimalExecTime = function (root) {
    const isLeaf = (node) => !node.left && !node.right;

    const heap = new Heap((n1, n2) => n1.sum > n2.sum);
    root.val <<= 1;
    root.sum = root.val;
    let nodes = [root];
    while (nodes.length) {
        const nodes2 = [];
        for (const node of nodes) {
            const [left, right] = [node.left, node.right];
            if (isLeaf(node)) {
                heap.push(node);
            }
            else {
                if (left) {
                    // left.pos = 0;
                    left.parent = node;
                    left.val <<= 1;
                    left.sum = node.sum + left.val;
                    nodes2.push(left);
                }
                if (right) {
                    // right.pos = 1;
                    right.parent = node;
                    right.val <<= 1;
                    right.sum = node.sum + right.val;
                    nodes2.push(right);
                }
            }
        }
        nodes = nodes2;
    }

    // return root;

    const finishTask = (task) => {
        const parent = task.parent;
        if (parent) {
            if (parent.left == task) {
                delete parent.left;
            }
            else {
                delete parent.right;
            }
            if (isLeaf(parent)) {
                heap.push(parent);
                // return parent;
            }
        }
    };

    const decTaskTime = (task, dec) => {
        task.sum -= dec;
        task.val -= dec;
    };

    let result = 0;
    let task1 = heap.pop();
    while (task1) {

        // let runTime = task2 ? Math.min(task1.val, task2.val) : task1.val;
        if (heap.length) {
            let task2 = heap.pop();

            // let runTime = task1.val;

            // let task3 = heap.top();
            if (heap.length) {
                const diff = task2.sum - heap.top().sum;
                // const runTime = Math.min(task1.val,task2.val)

                if (task1.val < task2.val) {
                    // const runTime = Math.min(task1.val, diff + 1);
                    // if (task1.val <= diff) {
                    if (task1.val <= diff + 1) {
                        finishTask(task1);
                        decTaskTime(task2, task1.val);
                        // task1 = task2;
                        heap.push(task2);
                        task1 = heap.pop();
                    }
                    else {
                        decTaskTime(task1, diff + 1);
                        decTaskTime(task2, diff + 1);
                        heap.push(task2);
                        // finishTask(task1);
                        // decTaskTime(task2, task1.val);

                    }
                }
                else {
                    // const runTime = Math.min(task2.val, diff + 1);
                    if (task2.val <= diff + 1) {
                        finishTask(task2);
                        decTaskTime(task1, task2.val);
                    }
                    else {
                        decTaskTime(task1, diff + 1);
                        decTaskTime(task2, diff + 1);
                        heap.push(task1);
                        heap.push(task2);
                        task1 = heap.pop();
                    }
                }

                // runTime = runTime > diff ? diff + 1 : runTime;

                // decTaskTime(task2, task1.val);
                // task1.val -= runTime;
            }
            else {
                // let runTime = Math.min(task1.val, task2.val);
                if (task1.val < task2.val) {
                    decTaskTime(task2, task1.val);
                    finishTask(task1);
                    heap.push(task2);
                    task1 = heap.pop();
                }
                else {
                    decTaskTime(task1, task2.val);
                    finishTask(task2);
                }
            }
        }
        else {
            // const runTime = task1.val;
            result += task1.val;
            task1 = task1.parent;
        }
    }
    return result / 2;

    // while (heap.length) {
    //     let runTime = task1.val;
    //     // if (task2) {
    //     // runTime = task2.sum > task1.sum ?;
    //     // }

    //     if (heap.length) {
    //         const task3 = heap.top();
    //     }


    // }
};

function run(root) {
    Test.run(minimalExecTime, BinaryTree.fromArray(root));
}

run([47, 74, 31]);
// run([15, 21, null, 24, null, 27, 26]);
// run([1, 3, 2, null, null, 4, 4]);
run([1, 3, 2, null, null, 4, 5]);