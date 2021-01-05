// https://leetcode-cn.com/problems/kth-smallest-number-in-multiplication-table/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');
var { Matrix } = require('../Common/Matrix');

var findKthNumber = function (m, n, k) {
    let low = 1, high = m * n;
    while (low < high) {
        const mid = low + Math.trunc((high - low) / 2);
        if (enough(mid)) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;

    function enough(num) {
        let count = 0;
        for (let i = 1; i <= Math.min(m, num); i++) {
            count += Math.min(n, Math.trunc(num / i));
        }
        return count >= k;
    }
};

function run(m, n, k) {
    // multiplicationTable(m, n);
    Test.run(findKthNumber, m, n, k);
}

function multiplicationTable(m, n) {
    const table = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            table[i][j] = (i + 1) * (j + 1);
        }
    }
    Matrix.logMatrixInArray(table);
}

// run(10, 10, 33);
// run(3, 3, 5)
// run(2, 3, 6)
run(9, 9, 64);
run(9895, 28405, 100787757);

// multiplicationTable(10, 10);