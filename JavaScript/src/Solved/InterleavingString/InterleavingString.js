// https://leetcode-cn.com/problems/interleaving-string/submissions/
var Test = require('../../Common/Test');

var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false;
    let count = 0;
    result = judgeIteratorly(s1.split(''), s2.split(''), s3.split(''));
    console.log({ count });
    return result;
    // return judgeIteratorly(s1.split(''), s2.split(''), s3.split(''));

    function judgeIteratorly(s1, s2, s3) {
        console.log("judgeIteratorly");

        let stack = [];
        while (s3.length > 0) {
            // console.log({ s3: s3.join('') });
            // console.log({ s1: s1.join('') });
            // console.log({ s2: s2.join('') });
            // console.log({ stack: stack.join('') });
            // console.log();
            count++;

            switch (true) {
                case s1.length == 0 && s2.length == 0: return isArrayEqual(s3, stack);
                case s1.length == 0: return isArrayEqual(s3, [...stack, ...s2]);
                case s2.length == 0: return isArrayEqual(s3, [...stack, ...s1]);
                case s3[0] == stack[0]: {
                    s3.shift();
                    stack.shift();
                    continue;
                }
                case s3[0] == s1[0] && s3[0] == s2[0]: {
                    stack.push(s3.shift());
                    s1.shift();
                    s2.shift();
                    continue;
                }
                case s3[0] == s1[0]: {
                    s3.shift();
                    s1.shift();
                    if (stack.length > 0) {
                        s2.unshift(...stack);
                        stack = [];
                    }
                    continue;
                }
                case s3[0] == s2[0]: {
                    s3.shift();
                    s2.shift();
                    if (stack.length > 0) {
                        s1.unshift(...stack);
                        stack = [];
                    }
                    continue;
                }
                default: return false;
            }
        }

        return s1.length == 0 && s2.length == 0 && stack.length == 0;
    }

    function isArrayEqual(a1, a2) {
        if (a1.length != a2.length) return false;
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) return false;
        }
        return true;

    }
};

function test(s1, s2, s3) {
    console.log({ s1 });
    console.log({ s2 });
    console.log({ s3 });
    const test = new Test.Test(isInterleave, s1, s2, s3);
    test.logArgs = false;
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
// console.log(isInterleave(...longInput));
// test(...input1);
test(...longInput);
// test1(...longInput);
// console.log(longInput[0].length);
// console.log(longInput[1].length);
// console.log(longInput[2].length);
