// https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var longestIncreasingPath = function (matrix) {
    if (matrix.length == 0) return 0;
    const height = matrix.length;
    const width = matrix[0].length;
    const maxLengths = Array(height).fill(0).map(_ => Array(width).fill(1));

    function dfs(i, j, prevValue, maxLength) {
        if (i >= 0 && i < height && j >= 0 && j < width) {
            const value = matrix[i][j];
            let goOn = false;
            if (prevValue != null) {
                if (prevValue > value && ++maxLength > maxLengths[i][j]) {
                    maxLengths[i][j] = maxLength;
                    goOn = true;
                }
            }
            else {
                maxLength = maxLengths[i][j];
                goOn = maxLength == 1;
            }
            if (goOn) {
                dfs(i - 1, j, value, maxLength);
                dfs(i + 1, j, value, maxLength);
                dfs(i, j - 1, value, maxLength);
                dfs(i, j + 1, value, maxLength);
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            dfs(i, j);
        }
    }

    return Math.max(...maxLengths.map(a => Math.max(...a)));
};

function test(input) {
    Matrix.logMatrixInArray(input);
    Test.test(longestIncreasingPath, input);
}

input1 = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
];

input2 = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1]
];

test([]);
test(input1);
test(input2);
testMap(longestIncreasingPath, 100);

function testMap(fun, size) {
    // var hundo = '';
    var hundo = [];
    for (i = 0; i < size; i++) {
        const hundo2 = [];
        for (j = 0; j < size; j++) {
            // hundo += Math.floor(Math.random() * 10);
            hundo2.push(Math.floor(Math.random() * 10));
        }
        hundo.push(hundo2);
        // hundo += '\n';
    }
    console.log('Map of size ' + size + 'x' + size + ' generated. Running pathFinder...');
    console.time();
    var answer = fun(hundo.slice(0, -1));
    console.timeEnd();
    console.log(answer);
    // return answer;

}
// test(inputBig);