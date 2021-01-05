// https://leetcode-cn.com/problems/decode-ways-ii/
var Test = require('./Common/Test');

var numDecodings = function (s) {
    const mod = 1e9 + 7;
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => 0);
    dp[0] = 1;
    for (let i = 0; i < n - 1 && dp[i]; i++) {
        if (s[i] != '0') {
            if (s[i] == '*') {
                dp[i + 1] += dp[i] * 9;
                dp[i + 2] += dp[i] * (s[i + 1] == '*' ? 15 : (parseInt(s[i + 1]) <= 6 ? 2 : 1));
            }
            else {
                dp[i + 1] += dp[i];
                if (s[i + 1] == '*') {
                    const num = parseInt(s[i]);
                    if (num <= 2) dp[i + 2] += dp[i] * (num == 2 ? 6 : 9);
                }
                else {
                    dp[i + 2] += parseInt(s[i] + s[i + 1]) <= 26 ? dp[i] : 0;
                }
            }
            dp[i + 1] %= mod;
            dp[i + 2] %= mod;
        }
    }
    if (s[n - 1] != '0') dp[n] += dp[n - 1] * (s[n - 1] == '*' ? 9 : 1);
    return dp[n] %= mod;
};

function run(s) {
    Test.run(numDecodings, s);
}

// run("*")
run("1*")
run("*1*")

// run("**");
// run("2*");
// run("3*");
// run("9*");
run("*1");
// run("*6");
// run("*7");
// run("***");
// run("******");
// run("***0***");
// run("***************");

// 0
// run("1238701018374")
// 6
// run("123871018374")
// run("0123871018374")
// run("212511219182")
// run("21251")
// run("2125")

// run("7101")