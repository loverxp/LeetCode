// https://leetcode-cn.com/problems/er-cha-shu-ren-wu-diao-du/
var Test = require('./Common/Test');
var { BinaryTree } = require('./Common/BinaryTree');
// var { Heap } = require('./Common/Heap');

class Heap {
    constructor(compare) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
    }

    push(val) {
        if (this.tree.length == 1) {
            this.tree.push(val);
        }
        else {
            const last = this.tree.length;
            let i = last, p = Math.trunc(i / 2);
            while (i > 1 && this.compare(val, this.tree[p])) {
                this.tree[i] = this.tree[p];
                i = p;
                p = Math.trunc(i / 2);
            }
            this.tree[i] = val;
        }
        this.length++;
    }

    top() {
        return this.tree[1];
    }

    pop() {
        this.length--;
        const top = this.tree[1];
        const last = this.tree[this.tree.length - 1];
        let i = 1, li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = this.tree[ri];
            if (this.compare(last, lval) && (rval == undefined || this.compare(last, rval))) {
                break;
            }
            else {
                if (rval == undefined || this.compare(lval, rval)) {
                    this.tree[i] = lval;
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree.pop();
        if (i != this.tree.length) {
            this.tree[i] = last;
        }
        return top;
    }

    isNotEmpty() {
        return this.length > 0;
    }
}

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
                    left.parent = node;
                    left.val <<= 1;
                    left.sum = node.sum + left.val;
                    nodes2.push(left);
                }
                if (right) {
                    right.parent = node;
                    right.val <<= 1;
                    right.sum = node.sum + right.val;
                    nodes2.push(right);
                }
            }
        }
        nodes = nodes2;
    }

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
            }
        }
    };

    const decTaskTime = (task, dec) => {
        task.sum -= dec;
        task.val -= dec;
        if (this.val == 0) {
            finishTask(task);
        }
    };

    let result = 0;
    let task1 = heap.pop();
    while (task1) {
        if (heap.isNotEmpty()) {
            let task2 = heap.pop();
            if (heap.isNotEmpty()) {
                const diff = task2.sum - heap.top().sum;
                const runTime = Math.min(task1.val, task2.val, diff + 1);
                result += runTime;
                decTaskTime(task1, runTime);
                decTaskTime(task2, runTime);
                if (task1.val) heap.push(task1);
                if (task2.val) heap.push(task2);
                task1 = heap.pop();
            }
            else {
                if (task1.val < task2.val) {
                    result += task1.val;
                    decTaskTime(task2, task1.val);
                    finishTask(task1);
                    heap.push(task2);
                    task1 = heap.pop();
                }
                else {
                    result += task2.val;
                    decTaskTime(task1, task2.val);
                    finishTask(task2);
                    if (task1.val == 0) task1 = heap.pop();
                }
            }
        }
        else {
            result += task1.val;
            task1 = task1.parent;
        }
    }
    return result / 2;
};

function run(root) {
    Test.run(minimalExecTime, BinaryTree.fromArray(root));
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(function (root) {
        console.log(root.length);
        root = BinaryTree.fromArray(root);
        console.log(root);
        return minimalExecTime(root);
    }, id);
}


// run([47, 74, 31]);
// run([15, 21, null, 24, null, 27, 26]);
// run([1, 3, 2, null, null, 4, 4]);
// run([1, 3, 2, null, null, 4, 5]);
// run([2, 6, 4, null, null, 8, 8])

testWithTestcase(112626447);

// [47, 74, 31]
// [1, 3, 2, null, null, 4, 5]
//  [2,6,4,null,null,8,8]
// [1, 3, 2, null, null, 4, 5]

