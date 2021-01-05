// https://leetcode-cn.com/problems/max-submatrix-lcci/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var getMaxMatrix = function (matrix) {
    if (matrix.length == 0) return 0;
    const [m, n] = [matrix.length, matrix[0].length];
    const prefixSums = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
            prefixSums[i + 1][j + 1] = sum + prefixSums[i][j + 1];
        }
    }

    let max = -Infinity;
    let coord;
    for (let i = 0; i < m; i++) {
        for (let j = i; j < m; j++) {
            let l = 0;
            let pre = 0;
            for (let r = 0; r < n; r++) {
                l = pre > 0 ? l : r;
                let sum2 = prefixSums[j + 1][r + 1] - prefixSums[i][r + 1];
                let sum1 = prefixSums[j + 1][l] - prefixSums[i][l];
                pre = sum2 - sum1;
                if (pre > max) {
                    max = pre;
                    coord = [i, l, j, r];
                }
            }
        }
    }
    return coord;
};

function run(matrix) {
    Matrix.logMatrixInArray(matrix);
    Test.logArgs = false;
    Test.run(getMaxMatrix, matrix);
}

run([[-1, 0], [0, -1]]);
run([[9, -8, 1, 3, -2], [-3, 7, 6, -2, 4], [6, -4, -4, 8, -7]]);
run([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]);
run([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);