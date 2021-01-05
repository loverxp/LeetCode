// https://leetcode-cn.com/problems/tiling-a-rectangle-with-the-fewest-squares/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var tilingRectangle = function (m, n) {
    const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => Infinity));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j) {
                dp[i][j] = 1;
            }
            else {
                // console.log({ i, j });
                // console.log(dp[i][j]);
                for (let k = 1; k < i; k++) {
                    dp[i][j] = Math.min(dp[i][j], dp[k][j] + dp[i - k][j]);
                    // console.log("h:", { k });
                    // console.log(dp[i][j]);
                }
                for (let k = 1; k < j; k++) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[i][j - k]);
                    // console.log("v:", { k });
                    // console.log(dp[i][j]);
                }
                // console.log(dp[i][j]);
                // for (let k1 = 1; k1 < Math.min(m - 1, n); k1++) {
                //     for (let k2 = 1; k2 < k1 && k1 + k2 < m; k2++) {
                //         dp[i][j] = Math.min(dp[i][j], dp[k1 - k2][n - k1] + dp[m - k1 + k2][n - k1 - k2] + dp[m - k1][k1 + k2] + 2);
                //     }
                // }
                // for (let k1 = 1; k1 < Math.min(i - 1, j); k1++) {
                    // for (let k2 = 1; k2 < k1 && k1 + k2 < i; k2++) {
                for (let k1 = 1; k1 < Math.min(i, j - 1); k1++) {
                    for (let k2 = 1; k2 < k1 && k1 + k2 < j; k2++) {
                        dp[i][j] = Math.min(dp[i][j], dp[k1 - k2][j - k1] + dp[i - k1 + k2][j - k1 - k2] + dp[i - k1][k1 + k2] + 2);
                        // if (i == 6 && j == 4) {
                        if (i == 6 && j == 4 && k1 == 3 && k2 == 2) {
                            // console.log({ i, j, k1, k2 });
                            console.log(dp[k1 - k2][j - k1]);
                            console.log(dp[i - k1 + k2][j - k1 - k2]);
                            console.log(dp[i - k1][k1 + k2]);
                            console.log(dp[i][j]);
                        }
                    }
                }
            }
        }
    }
    Matrix.logMatrixInArray(dp);
    // return dp;
    return dp[m][n];
    // return Infinity;
};

function run(m, n) {
    Test.run(tilingRectangle, m, n);
}

// run(2, 2)
// run(3, 3)
// run(2, 3)
// run(5, 8)
// run(8, 3)
// run(7, 13)
// run(7, 11)
// run(4, 11)
run(13, 7)
run(11, 13)
run(12, 13)
run(13, 12)