// https://leetcode-cn.com/problems/kth-smallest-number-in-multiplication-table/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');
var { Matrix } = require('../Common/Matrix');

var findKthNumber = function (m, n, k) {
    const heap = new Heap(([x1, y1], [x2, y2]) => x1 * y1 < x2 * y2, Array(n).fill().map((_, i) => [i + 1, 1]));
    let result = 0;
    while (k-- > 0 && heap.length) {
        let [x, y] = heap.pop();
        result = x * y;
        if (y++ < m) {
            heap.push([x, y]);
        }
    }
    return result;
};

function run(m, n, k) {
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

// run(3, 3, 5)
// run(2, 3, 6)
// run(9, 9, 64);
// run(9895, 28405, 100787757);

multiplicationTable(10, 10);