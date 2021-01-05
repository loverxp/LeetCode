// https://leetcode-cn.com/problems/distinct-subsequences/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var numDistinct = function (s, t) {
    let m = t.length + 1;
    let n = s.length + 1;
    const dp = Array(m).fill(0).map(a => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = i; j < n; j++) {
            if (t[i - 1] == s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
            }
            else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

function test(s, t) {
    Test.test(numDistinct, s, t);
}

test("rabbbit", "rabbit");
test("babgbag", "bag");