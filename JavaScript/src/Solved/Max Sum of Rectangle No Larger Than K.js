// https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/
var Test = require('../Common/Test');

var maxSumSubmatrix = function (matrix, k) {
    const [m, n] = [matrix.length, matrix[0].length];
    const prefixSums = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
            prefixSums[i + 1][j + 1] = sum + prefixSums[i][j + 1];
        }
    }
    let result = -Infinity;
    for (let top = 0; top < m; top++) {
        for (let left = 0; left < n; left++) {
            for (let bottom = top + 1; bottom <= m; bottom++) {
                for (let right = left + 1; right <= n; right++) {
                    const sum = prefixSums[bottom][right] - prefixSums[top][right] - prefixSums[bottom][left] + prefixSums[top][left];
                    if (sum <= k) {
                        result = Math.max(result, sum);
                    }
                }
            }
        }
    }
    return result;
};

function run(matrix, k) {
    Test.run(maxSumSubmatrix, matrix, k);
}

run([[1, 0, 1], [0, -2, 3]], 2);
run([[2, 2, -1]], 0);