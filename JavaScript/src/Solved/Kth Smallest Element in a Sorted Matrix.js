// https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');

var kthSmallest = function (matrix, k) {
    const [m, n] = [matrix.length, matrix[0].length];
    const heap = new Heap(([x1, y1], [x2, y2]) => matrix[y1][x1] < matrix[y2][x2], matrix[0].map((_, i) => [i, 0]));

    while (k-- > 1) {
        let [x, y] = heap.pop();
        if (++y < m) {
            heap.push([x, y]);
        }
    }
    const [x, y] = heap.top();
    return matrix[y][x];
};

function run(matrix, k) {
    Test.run(kthSmallest, matrix, k);
}

run([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8);