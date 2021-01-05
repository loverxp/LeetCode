// https://leetcode-cn.com/problems/minimum-path-sum/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var minPathSum = function (grid) {
    let m = grid.length;
    if (m == 0) return 0;
    let n = grid[0].length;
    if (n == 0) return 0;

    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
        }
    }
    return grid[m - 1][n - 1];
};

function test(grid) {
    Matrix.logMatrixInArray(grid);
    Test.test(minPathSum, grid);
}


test([]);
test([[]]);
test([[1]]);
test([[1, 2, 3, 4]]);
test([[1], [2], [3], [4]]);
test([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]]);

// []
// [[]]
// [[1]]
// [[1, 2, 3, 4]]
// [[1], [2], [3], [4]]
// [[1, 3, 1], [1, 5, 1], [4, 2, 1]]