// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
const { Matrix } = require('./Common/Matrix');
var Test = require('./Common/Test');

var minInsertions = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n + 1 }, () => Infinity));
    for (let i = 0; i < n; i++) {
        dp[i][n] = i;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = n - j;
    }
    for (let i = 1; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j + 1]) + 1;
            if (s[i - 1] == s[j]) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1]);
            }
        }
    }
    return Math.min(...dp.map((arr, i) => Math.min(arr[i], arr[i + 1])));
};

function run(s) {
     Test.run(minInsertions, s);
}

// run("zzazz")
// run("mbadm")
run("leetcode")
// run("g")
// run("gg")
// run("no")

// run("https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome")
// run("minimum-insertion-steps-to-make-a-string-palindrome")
// run("minimum-insertion--palindrome")
run("minimum number")