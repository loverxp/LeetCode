// https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var numSubmatrixSumTarget = function (matrix, target) {
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

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = i; j < m; j++) {
            const map = new Map([[0, 1]]);
            for (let k = 0; k < n; k++) {
                let sum = prefixSums[j + 1][k + 1] - prefixSums[i][k + 1];
                if (map.has(sum - target)) {
                    count += map.get(sum - target);
                }
                if (!map.has(sum)) {
                    map.set(sum, 0);
                }
                map.set(sum, map.get(sum) + 1);
            }
        }
    }
    return count;
};

function run(matrix, target) {
    Test.run(numSubmatrixSumTarget, matrix, target);
}


run([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 0);
run([[1, -1], [-1, 1]], 0);
// run([[-1, 0], [0, -1]]);
// run([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]);
// run([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);