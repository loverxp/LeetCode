// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
const { Matrix } = require('./Common/Matrix');
var Test = require('./Common/Test');

var minInsertions = function (s) {
    const n = s.length;
    let dp1 = Array(n).fill(0);
    let dp2 = Array(n).fill(0);
    for (let len = 2; len <= n; len++) {
        const dp3 = [];
        for (let i = 0; i + len <= n; i++) {
            dp3.push(s[i] == s[i + len - 1] ? dp1[i + 1] : Math.min(dp2[i], dp2[i + 1]) + 1);
            // dp3[i] = s[i] == s[i + len - 1] ? dp1[i + 1] : Math.min(dp2[i], dp2[i + 1]) + 1;
        }
        [dp1, dp2] = [dp2, dp3];
    }
    return dp2[0];
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