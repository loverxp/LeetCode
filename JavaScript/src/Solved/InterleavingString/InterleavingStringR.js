// https://leetcode-cn.com/problems/interleaving-string/submissions/

var isInterleave = function (s1, s2, s3) {
    const caches = {};
    return judgeRecurrsively(s3, s1, s2);

    function judgeRecurrsively(target, s1, s2) {
        if (caches[[target, s1, s2]] == undefined) {
            if (target.length == 0) {
                caches[[target, s1, s2]] = s1.length == 0 && s2.length == 0;
            }
            else {
                switch (true) {
                    case s1.length == 0:
                        caches[[target, s1, s2]] = target == s2;
                        break;
                    case s2.length == 0:
                        caches[[target, s1, s2]] = target == s1;
                        break;
                    case target[0] == s1[0] && target[0] == s2[0]:
                        caches[[target, s1, s2]] =
                            judgeRecurrsively(target.slice(1), s1.slice(1), s2) ||
                            judgeRecurrsively(target.slice(1), s1, s2.slice(1));
                        break;
                    case target[0] == s1[0]:
                        caches[[target, s1, s2]] = judgeRecurrsively(target.slice(1), s1.slice(1), s2);
                        break;
                    case target[0] == s2[0]:
                        caches[[target, s1, s2]] = judgeRecurrsively(target.slice(1), s1, s2.slice(1));
                        break;
                    default:
                        caches[[target, s1, s2]] = false;
                        break;
                }
            }
        }
        return caches[[target, s1, s2]]
    }
};

function test1(s1, s2, s3) {
    console.log({ s3 });
    console.log({ s1 });
    console.log({ s2 });
    console.time();
    console.log(isInterleave(s1, s2, s3));
    console.timeEnd();
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
// test("Bahas", "Bananas from am", "Bananas from Bahamas");
// test("Bahas", "am", "Bahamas");
// console.log(isInterleave(...longInput));
// test(...input1);
test1(...longInput);
// test1(...longInput);
// console.log(longInput[0].length);
// console.log(longInput[1].length);
// console.log(longInput[2].length);

// "aabcc"
// "dbbca"
// "aadbbcbcac"
// "bcc"
// "bbca"
// "bbcbcac"
// "c"
// "ca"
// "cac"
// "Bahas"
// "Bananas from am"
// "Bananas from Bahamas"
// "Bahas"
// "am"
// "Bahamas"
// "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa"
// "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab"
// "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"