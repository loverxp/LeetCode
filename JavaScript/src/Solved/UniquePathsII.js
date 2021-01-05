// https://leetcode-cn.com/problems/unique-paths-ii/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (m == 0 || n == 0 || obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) return 0;
    const dp = Array(m).fill(0).map(a => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = 1;
            }
            else {
                const fromUp = i > 0 && obstacleGrid[i - 1][j] != 1 ? dp[i - 1][j] : 0;
                const fromLeft = j > 0 && obstacleGrid[i][j - 1] != 1 ? dp[i][j - 1] : 0;
                dp[i][j] = fromUp + fromLeft;
            }
        }
    }
    return dp[m - 1][n - 1];
};

function test(obstacleGrid) {
    Matrix.logMatrixInArray(obstacleGrid);
    Test.test(uniquePathsWithObstacles, obstacleGrid);
}

test([[1]]);
test([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]]);
test([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0]]);
test([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1]]);

// [[1]]
// [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// [[1, 0, 0], [0, 1, 0], [0, 0, 0]]