// https://leetcode-cn.com/problems/minimum-falling-path-sum-ii/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var minFallingPathSum = function (arr) {
    const length = arr.length
    for (let i = 1; i < length; i++) {
        let min1 = Infinity, min2 = Infinity;
        for (let j = 0; j < length; j++) {
            const val = arr[i - 1][j];
            if (val < min1) {
                min2 = min1;
                min1 = val;
            }
            else if (val < min2) {
                min2 = val;
            }
        }
        for (let j = 0; j < length; j++) {
            arr[i][j] += arr[i - 1][j] == min1 ? min2 : min1;
        }
    }
    return Math.min(...arr[arr.length - 1]);
};

function test(arr) {
    Matrix.logMatrixInArray(arr);
    Test.test(minFallingPathSum, arr);
}

test([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
test([[-73, 61, 43, -48, -36], [3, 30, 27, 57, 10], [96, -76, 84, 59, -15], [5, -49, 76, 31, -7], [97, 91, 61, -46, 67]]);

// [[-73, 61, 43, -48, -36], [3, 30, 27, 57, 10], [96, -76, 84, 59, -15], [5, -49, 76, 31, -7], [97, 91, 61, -46, 67]] 