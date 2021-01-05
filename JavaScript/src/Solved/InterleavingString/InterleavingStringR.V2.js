// https://leetcode-cn.com/problems/interleaving-string/submissions/

var Test = require('../../Common/Test');

var isInterleave = function (s1, s2, s3) {

    let count = 0;
    result = judgeRecurrsively(s1, s2, s3, 0, 0, 0);
    console.log({ count });
    return result;

    // return judgeRecurrsively(s1, s2, s3, 0, 0, 0);

    function judgeRecurrsively(s1, s2, s3, i1, i2, i3) {
        count++;
        if (s3.length == i3) {
            if (s1.length == i1 && s2.length == i2) return true;
            else return false;
        }
        else {
            // const selectS1 = () => judgeRecurrsively(s1, s2, s3, i1 + 1, i2, i3 + 1);
            // const selectS2 = () => judgeRecurrsively(s1, s2, s3, i1, i2 + 1, i3 + 1);
            switch (true) {
                case s1.length == i1: return s3.slice(i3) == s2.slice(i2);
                case s2.length == i2: return s3.slice(i3) == s1.slice(i1);
                case s3[i3] == s1[i1] && s3[i3] == s2[i2]: {
                    return judgeRecurrsively(s1, s2, s3, i1 + 1, i2, i3 + 1) || judgeRecurrsively(s1, s2, s3, i1, i2 + 1, i3 + 1);
                }
                case s3[i3] == s1[i1]: return judgeRecurrsively(s1, s2, s3, i1 + 1, i2, i3 + 1);
                case s3[i3] == s2[i2]: return judgeRecurrsively(s1, s2, s3, i1, i2 + 1, i3 + 1);
                // case s3[i3] == s1[i1] && s3[i3] == s2[i2]: return selectS1() || selectS2();
                // case s3[i3] == s1[i1]: return selectS1();
                // case s3[i3] == s2[i2]: return selectS2();
                default: return false;
            }
        }

        // function selectS1() {
        //     return judgeRecurrsively(s1, s2, s3, i1 + 1, i2, i3 + 1);
        // }

        // function selectS2() {
        //     return judgeRecurrsively(s1, s2, s3, i1, i2 + 1, i3 + 1);
        // }
    }
};

function test(s1, s2, s3) {
    console.log({ s3 });
    console.log({ s1 });
    console.log({ s2 });
    const test = new Test.Test(isInterleave, s1, s2, s3);
    test.logArgs = false;
    test.do();
    // console.time();
    // console.log(isInterleave(s1, s2, s3));
    // console.timeEnd();
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
// test1("c", "ca", "cac");
test("Bahas", "Bananas from am", "Bananas from Bahamas");
// test("Bahas", "am", "Bahamas");
// console.log(isInterleave(...longInput));
// test(...input1);
// test(...longInput);
// test1(...longInput);
// console.log(longInput[0].length);
// console.log(longInput[1].length);
// console.log(longInput[2].length);
