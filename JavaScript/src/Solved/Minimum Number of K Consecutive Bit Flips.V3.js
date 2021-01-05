// https://leetcode-cn.com/problems/minimum-number-of-k-consecutive-bit-flips/
var Test = require('./Common/Test');

class Queue {
    constructor() {
        this.root = {}
        this.last = this.root;
        this.length = 0;
    }

    push(o) {
        this.last.next = { val: o };
        this.last = this.last.next;
        this.length++;
    }

    pop() {
        if (this.last != this.root) {
            const next = this.root.next;
            const val = next.val;
            this.root.next = next.next;
            if (next == this.last) this.last = this.root;
            this.length--;
            return val;
        }
        return undefined;
    }
}

var minKBitFlips = function (A, k) {
    const n = A.length;
    const queue = new Queue();
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] ^ ((queue.length + 1) % 2)) {
            if (i + k > n) return -1;
            count++;
            queue.push(i);
        }
        if (queue.length && queue.root.next.val + k - 1 == i) queue.pop();
    }
    return count;
};

function run(A, K) {
    Test.run(minKBitFlips, A, K);
}

function randomTest(n, k) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.trunc(Math.random() * 2));
    }

    console.log(arr);
    Test.run(minKBitFlips, arr, k);
}

run([0, 1, 0], 1)
run([1, 1, 0], 2)
run([0, 0, 0, 1, 0, 1, 1, 0], 3)
// run([0, 1, 1, 0, 1, 0, 0, 0], 3)
//54
// run([1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    // 3);

//-1
// run([1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
// 37);

//23
// run([1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    // 4)
// randomTest(55, 4);
// randomTest(100, 3);
// randomTest(1000, 3);