// https://leetcode-cn.com/problems/broken-board-dominoes/
var Test = require('./Common/Test');
const { Matrix } = require('./Common/Matrix');

var domino = function (m, n, broken) {
    const board = Array(m + 1).fill(0);
    broken.forEach(([i, j]) => board[i] ^= (1 << j));
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array.from({ length: 1 << n }, () => Array(1 << n).fill(0))));
    return dfs(0, 0, 0);

    function dfs(i, j, count) {
        if (i == m) {
            return count;
        }
        else if (j == n) {
            return dfs(i + 1, 0, count);
        }
        else if (!(board[i] & (1 << j))) {
            const mask1 = board[i];
            const mask2 = board[i + 1];
            if (0 == dp[i][j][mask1][mask2]) {
                let max = 0;
                if (j < n - 1 && !(board[i] & (1 << j + 1))) {
                    board[i] ^= 1 << j;
                    board[i] ^= 1 << j + 1;
                    max = Math.max(max, dfs(i, j + 2, count + 1));
                    board[i] ^= 1 << j;
                    board[i] ^= 1 << j + 1;
                }
                else {
                    max = Math.max(max, dfs(i, j + 1, count));
                }
                if (i < m - 1 && !(board[i + 1] & (1 << j))) {
                    board[i] ^= 1 << j;
                    board[i + 1] ^= 1 << j;
                    max = Math.max(max, dfs(i, j + 1, count + 1));
                    board[i] ^= 1 << j;
                    board[i + 1] ^= 1 << j;
                }
                dp[i][j][mask1][mask2] = max - count;
            }
            return dp[i][j][mask1][mask2] + count;
        }
        else {
            return dfs(i, j + 1, count);
        }
    }
};

function showBoard(n, m, broken) {
    console.log("broken length:", broken.length);
    // const board = Array(n).fill().map((_, i) => Array(m).fill().map((_, j) => (i + j) % 2));
    const board = Array(n).fill().map((_, i) => Array(m).fill('.'));
    // broken.forEach(([i, j]) => board[i][j] = '#');
    broken.forEach(([i, j]) => { if (i < n && j < m) board[i][j] = '#' });
    // return Matrix.matrixToString(a);
    // Matrix.logMatrixInString(board);
    Matrix.logMatrixInArray(board);
}

function run(n, m, broken) {
    // showBoard(n, m, broken);
    Test.run(domino, n, m, broken);
    // Test.repeatTest(1000, domino, n, m, broken);
    // const test = new Test.Test(domino, n, m, broken);
    // const test = new Test.Test(showBoard, n, m, broken);
    // test.logArgs = false;
    // test.do();
}

// function repeatTest(n, m, broken) {
// Test.repeatTest(1000, domino, n, m, broken);
// }

// run(2, 3, [[1, 0], [1, 1]]);
// run(3, 3, []);
run(8, 8, []);
// run(4, 4, [[0, 0], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3]]);
// run(5, 5, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);
// run(4, 4, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);
run(8, 8, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);

// 2
// 3
// [[1, 0], [1, 1]]
// 3
// 3
// []
// 8
// 8
// [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]