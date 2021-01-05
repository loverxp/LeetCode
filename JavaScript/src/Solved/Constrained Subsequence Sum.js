// https://leetcode-cn.com/problems/constrained-subsequence-sum/
var Test = require('../Common/Test');

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
}

var constrainedSubsetSum = function (nums, k) {
    const n = nums.length;
    const heap = new Heap((a, b) => a > b);
    heap.push(nums[0]);
    for (let i = 1; i < k; i++) {
        const top = heap.top();
        if (top > 0) nums[i] += top;
        heap.push(nums[i]);
    }

    const toBeRemoved = new Set();
    for (let i = k; i < n; i++) {
        let top = heap.top();
        while (toBeRemoved.has(top)) {
            heap.pop();
            toBeRemoved.delete(top);
            top = heap.top();
        }

        if (top > 0) nums[i] += top;
        heap.push(nums[i]);

        const removed = nums[i - k];
        if (removed == heap.top()) {
            heap.pop();
        }
        else {
            toBeRemoved.add(removed);
        }
    }
    return Math.max(...nums);
};

function run(nums, k) {
    Test.run(constrainedSubsetSum, nums, k);
}

// run([10, 2, -10, 5, 20], 2)
// run([-1, -2, -3], 1)
// run([10, -2, -10, -5, 20], 2)

// run([100, 2, -10, 5, -7, 20], 2)
// run([100, -2, 10, -11, -7, 20], 2)
// run([100, -2, 10, -11, -7, 20], 3)
// run([100, -20, 10, -11, -7, 20], 3)
// run([100, -2, -10, -11, -7, 20], 2)
run([100, 100, -300, -320, 10, 10, 10], 2);


// run([-10, -20, 10, -11, -7, 20], 2)     //23