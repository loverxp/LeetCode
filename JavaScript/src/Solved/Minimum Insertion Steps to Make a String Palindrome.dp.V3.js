// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
const { Matrix } = require('./Common/Matrix');
var Test = require('./Common/Test');

var minInsertions = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n + 1 }));
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
        dp[i][i + 1] = 0;
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len;
            dp[i][j] = s[i] == s[j - 1] ? dp[i + 1][j - 1] : Math.min(dp[i][j - 1], dp[i + 1][j]) + 1;
        }
    }
    return dp[0][n];
};

function run(s) {
    Test.run(minInsertions, s);
}

run("zzazz")
// run("mbadm")
// run("leetcode")
// run("g")
// run("gg")
// run("no")

run("https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome")
run("minimum-insertion-steps-to-make-a-string-palindrome")
run("minimum-insertion--palindrome")
run("minimum number")