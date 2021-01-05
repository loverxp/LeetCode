// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
var Test = require('../Common/Test');

var minInsertions = function (s) {
    const n = s.length;
    const memo = Array.from({ length: n }, () => Array.from({ length: n }));

    return dfs(0, s.length - 1, 0);

    function dfs(i, j, steps) {
        if (j <= i) return steps;
        if (undefined == memo[i][j] || steps < memo[i][j]) {
            memo[i][j] = steps;
            if (s[i] == s[j]) {
                return dfs(i + 1, j - 1, steps);
            }
            else {
                return Math.min(dfs(i + 1, j, steps + 1), dfs(i, j - 1, steps + 1));
            }
        }
        return Infinity;
    }
};

function run(s) {
    Test.run(minInsertions, s);
}

// run("zzazz")
// run("mbadm")
// run("leetcode")
// run("g")
// run("gg")
// run("no")

run("https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome")
run("minimum-insertion-steps-to-make-a-string-palindrome")
run("minimum-insertion--palindrome")
run("minimum number")