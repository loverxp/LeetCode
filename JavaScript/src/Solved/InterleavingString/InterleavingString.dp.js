// https://leetcode-cn.com/problems/interleaving-string/submissions/
var Test = require('../../Common/Test');
var Matrix = require('../../Common/Matrix').Matrix;

var isInterleave = function (s1, s2, s3) {
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;
    if (len1 + len2 != len3) return false;
    const dp = Array(len1 + 1).fill(0).map(_ => Array(len2 + 1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i < len1 + 1; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1];
    }
    for (let j = 1; j < len2 + 1; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1];
    }
    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            dp[i][j] = (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]) || (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]);
        }
    }
    return dp[len1][len2];
}

function test(s1, s2, s3) {
    console.log({ s1 });
    console.log({ s2 });
    console.log({ s3 });
    const test = new Test.Test(isInterleave, s1, s2, s3);
    test.logArgs = false;
    // test.resultLogger = function(result){

    // }
    test.do();
}
// console.log(isInterleave("Bahas", "Bananas from am", "Bananas from Bahamas"));
// console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));

input1 = [
    "aa",
    "ab",
    "aaba"
];
longInput = [
    "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
    "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
    "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"
];

// test("aabcc", "dbbca", "aadbbcbcac");
// test("bcc", "bbca", "bbcbcac");
// test("c", "ca", "cac");
// test("Bahas", "Bananas from am", "Bananas from Bahamas");
// test("Bahas", "am", "Bahamas");

// test(...input1);
test(...longInput);
// test1(...longInput);
// console.log(longInput[0].length);
// console.log(longInput[1].length);
// console.log(longInput[2].length);
