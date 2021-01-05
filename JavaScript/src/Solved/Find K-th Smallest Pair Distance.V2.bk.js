// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/
var Test = require('./Common/Test');
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

var smallestDistancePair = function (nums, k) {
    const counter = new Map();
    let distZeros = 0;
    for (const num of nums) {
        if (!counter.has(num)) {
            counter.set(num, 1);
        }
        else {
            counter.set(num, counter.get(num) + 1);
            distZeros++;
        }
    }

    if (distZeros >= k) {
        return 0;
    }
    else {
        k -= distZeros;

        nums = [...counter.keys()].sort();
        const n = nums.length;
        const heap = new Heap(([l1, r1], [l2, r2]) => nums[r1] - nums[l1] < nums[r2] - nums[l2]);

        for (let i = 0; i < n - 1; i++) {
            heap.push([i, i + 1]);
        }

        // while (k > 1) {
        while (true) {
            let [l, r] = heap.pop();
            const lCount = counter.get(nums[l]);
            const rCount = counter.get(nums[r]);
            const minCount = lCount * rCount;
            if (minCount >= k) {
                return nums[r] - nums[l];
            }
            else {
                k -= minCount;
                if (++r < n) {
                    heap.push([l, r]);
                }
            }
        }

        for (let i = 0; i < k - 1; i++) {
            let [l, r] = heap.pop();
            if (++r < n) {
                heap.push([l, r]);
            }
        }
        const [l, r] = heap.pop();
        return nums[r] - nums[l];
    }
};

function run(nums, k) {
    Test.run(smallestDistancePair, nums, k);
}

function testWithTestcase(id) {
    Test.testWithTestcase(smallestDistancePair, id);
}

// run([1, 3, 1], 1);
// run([1, 3, 1], 2);
// run([1, 3, 1], 3);
// run([1, 3, 1], 4);

testWithTestcase(103744976);