// https://leetcode-cn.com/problems/minimum-moves-to-reach-target-with-rotations/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var minimumMoves = function (grid) {
    const n = grid.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Array.from({ length: 2 }, () => Infinity)));
    for (let x = 1; x < n && grid[0][x] == 0; x++) {
        dp[0][x][0] = x - 1;
    }
    // if (grid[1][0] == 0) {
        // dp[1][0][1] = 1;
    // }
    for (let y = 1; y < n && grid[y][0] == 0; y++) {
        dp[1][0][1] = y;
    }
    for (let y = 1; y < n; y++) {
        // if (grid[y][0] == 0 && grid[y-1][0] ==0) {
        if (grid[y][0] == 0) {
            dp[y][0][0] = Math.min(dp[y - 1][0][0], dp[y - 1][1][1]) + 1;
        }
        for (let x = 1; x < n; x++) {
            if (grid[y][x] == 0) {
                // dp[y][x][0] = Math.min(dp[y - 1][x][0], dp[y - 1][x + 1][1]);

            }
        }
    }
};

function run(grid) {
    // Matrix.logMatrixInArray(grid);
    Test.run(minimumMoves, grid);
}

run([[0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0]]);
// run([[0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1], [1, 1, 1, 0, 0, 1], [1, 1, 1, 0, 0, 1], [1, 1, 1, 0, 0, 0]]);