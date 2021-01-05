// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
const { Matrix } = require('./Common/Matrix');
var Test = require('./Common/Test');

var minInsertions = function (s) {
    const n = s.length;
    let dp1 = Array.from({ length: n + 1 }, (_, i) => n - i);
    let dp2 = Array.from({ length: n + 1 });
    let result = n - 1;
    for (let i = 1; i < n; i++) {
        dp2[n] = i;
        for (let j = n - 1; j >= i; j--) {
            dp2[j] = s[i - 1] == s[j] ? dp1[j + 1] : Math.min(dp1[j], dp2[j + 1]) + 1;
        }
        [dp1, dp2] = [dp2, dp1];
        result = Math.min(result, dp1[i], dp1[i + 1]);
    }
    return result;
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
// run("minimum-insertion-steps-to-make-a-string-palindrome")
// run("minimum-insertion--palindrome")
// run("minimum number")