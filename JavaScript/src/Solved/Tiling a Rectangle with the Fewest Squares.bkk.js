// https://leetcode-cn.com/problems/tiling-a-rectangle-with-the-fewest-squares/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var tilingRectangle = function (m, n) {
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity))));

    for (let top = 0; top < m; top++) {
        for (let left = 0; left < n; left++) {
            for (let len = 0; len < Math.min(m - top, n - left); len++) {
                dp[top][left][top + len][left + len] = 1;
            }
        }
    }
    for (let top = 0; top < m; top++) {
        for (let left = 0; left < n - 1; left++) {
            for (let len = 1; len < n - left; len++) {
                dp[top][left][top][left + len] = len + 1;
            }
        }
    }
    for (let top = 0; top < m - 1; top++) {
        for (let left = 0; left < n; left++) {
            for (let len = 1; len < n - top; len++) {
                dp[top][left][top + len][left] = len + 1;
            }
        }
    }

    logDP(dp, m, n);


    // return dp[0][0];

    return dp[0][0][m - 1][n - 1];
};

function logDP(dp, m, n) {
    console.log();
    console.log();
    for (let top = 0; top < m; top++) {
        for (let left = 0; left < n; left++) {
            console.log();
            console.log({ top, left });
            Matrix.logMatrixInArray(dp[top][left], true);
        }
    }
}

function run(m, n) {
    Test.run(tilingRectangle, m, n);
}

run(2, 2)
// run(3, 3)
// run(2, 3)
// run(5, 8)
// run(11, 13)