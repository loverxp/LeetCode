// https://leetcode-cn.com/problems/decode-ways/
var Test = require('./Common/Test');

var numDecodings = function (s) {
    const n = s.length;
    const memo = Array.from({ length: n }, () => -1);

    return dfs(0);

    function dfs(i) {
        if (i == n) return 1;
        if (-1 == memo[i]) {
            memo[i] = s[i] == '0' ?
                0 :
                (dfs(i + 1) + (i < n - 1 && parseInt(s[i] + s[i + 1]) <= 26 ?
                    dfs(i + 2) :
                    0));
        }
        return memo[i];
    }
};

function run(s) {
    Test.run(numDecodings, s);
}

// run("12")
// run("226")
// run("0")
// run("1")

// 0
run("1238701018374")
// 6
run("123871018374")
run("212511219182")