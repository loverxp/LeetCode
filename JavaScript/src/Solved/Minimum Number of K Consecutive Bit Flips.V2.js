// https://leetcode-cn.com/problems/minimum-number-of-k-consecutive-bit-flips/
var Test = require('./Common/Test');

var minKBitFlips = function (A, k) {
    const n = A.length;
    const queue = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] ^ ((queue.length + 1) % 2)) {
            if (i + k > n) return -1;
            count++;
            queue.push(i);
        }
        if (queue[0] + k - 1 == i) queue.shift();
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