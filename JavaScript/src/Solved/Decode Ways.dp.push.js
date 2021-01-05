// https://leetcode-cn.com/problems/decode-ways/
var Test = require('./Common/Test');

var numDecodings = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => 0);
    dp[0] = 1;
    for (let i = 0; i < n - 1 && dp[i]; i++) {
        if (s[i] != '0') {
            dp[i + 1] += dp[i];
            dp[i + 2] = parseInt(s[i] + s[i + 1]) <= 26 ? dp[i] : 0;
        }
    }
    if (s[n - 1] != '0') dp[n] += dp[n - 1];
    return dp[n];
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
// run("0123871018374")
run("212511219182")
// run("21251")
// run("2125")

// run("7101")