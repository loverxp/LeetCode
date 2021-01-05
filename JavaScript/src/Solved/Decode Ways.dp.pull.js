// https://leetcode-cn.com/problems/decode-ways/
var Test = require('./Common/Test');

var numDecodings = function (s) {
    if (s[0] == '0') return 0;
    const n = s.length;
    const dp = [1, 1];
    for (let i = 1; i < n && dp[i]; i++) {
        dp[i + 1] =
            (s[i] != '0' ? dp[i] : 0) +
            (s[i - 1] != '0' && parseInt(s[i - 1] + s[i]) <= 26 ? dp[i - 1] : 0);
    }
    return dp.length == n + 1 ? dp[n] : 0;
};

function run(s) {
    Test.run(numDecodings, s);
}

// run("12")
// run("226")
// run("0")
// run("1")

// 0
// run("1238701018374")
// 6
// run("123871018374")
// run("212511219182")
run("2125")