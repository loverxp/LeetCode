// https://leetcode-cn.com/problems/maximal-rectangle/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var maximalRectangle = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0;
    const [m, n] = [matrix.length, matrix[0].length];
    matrix = matrix.map(arr => arr.map(num => parseInt(num)));
    const prefixSums = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
            prefixSums[i + 1][j + 1] = sum + prefixSums[i][j + 1];
        }
    }
    let max = 0;
    for (let top = 0; top < m; top++) {
        for (let left = 0; left < n; left++) {
            for (let bottom = top + 1; bottom <= m; bottom++) {
                for (let right = left + 1; right <= n; right++) {
                    const sum1 = prefixSums[bottom][right] - prefixSums[top][right] - prefixSums[bottom][left] + prefixSums[top][left];
                    const sum2 = bottom * right - top * right - bottom * left + top * left;
                    if (sum1 == sum2 && sum1 > max) {
                        max = sum1;
                    }
                }
            }
        }
    }
    return max;
};

function test(input) {
    Test.test(maximalRectangle, input);
}

input1 = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

test(input1);
test([]);
test([[]]);