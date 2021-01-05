// https://leetcode-cn.com/problems/k-th-smallest-prime-fraction/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');


var kthSmallestPrimeFraction = function (nums, k) {
    const n = nums.length;
    const heap = new Heap(([l1, r1], [l2, r2]) => nums[l1] * nums[r2] < nums[l2] * nums[r1]);

    for (let i = 1; i < n; i++) {
        heap.push([0, i]);
    }

    while (--k > 0) {
        let pair = heap.pop();
        if (++pair[0] < pair[1]) {
            heap.push(pair);
        }
    }
    return heap.top().map(i => nums[i]);
};

function run(A, K) {
    Test.run(kthSmallestPrimeFraction, A, K);
}

function testWithTestcase(id) {
    Test.testWithTestcase(kthSmallestPrimeFraction, id);
}

// run([1, 2, 4, 8, 16], 5);
// run([1, 2, 3, 5], 3);
// run([1, 7], 1);
// run([1, 2, 3, 100, 1000], 10);
testWithTestcase(102560599);