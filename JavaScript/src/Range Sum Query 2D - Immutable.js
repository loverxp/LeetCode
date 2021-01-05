// https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var NumMatrix = function (matrix) {
    if (matrix.length == 0) return;
    const [m, n] = [matrix.length, matrix[0].length];
    const prefixSums = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
            prefixSums[i + 1][j + 1] = sum + prefixSums[i][j + 1];
        }
    }
    this.prefixSums = prefixSums;
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    const sums = this.prefixSums;
    return sums[row2 + 1][col2 + 1] - sums[row2 + 1][col1] - sums[row1][col2 + 1] + sums[row1][col1];
};

function runInSequence(ops, params) {
    Test.runWithInstructions(NumMatrix, ops, params);
}

runInSequence(["NumMatrix"], [[[]]]);
// runInSequence(["NumMatrix", "sumRegion", "sumRegion", "sumRegion"], [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]);