// https://leetcode-cn.com/problems/unique-paths/
var Test = require('../../Common/Test');
var Matrix = require('../../Common/Matrix').Matrix;

var uniquePaths = function (m, n) {
    const dp = Array(n + 1).fill(0).map(a => Array(m + 1).fill(0));
    dp[0][1] = 1;
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n][m];
};

function test(m, n) {
    Test.test(uniquePaths, m, n);
}

test(3, 2);
test(7, 3);