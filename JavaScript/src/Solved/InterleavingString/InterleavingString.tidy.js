// https://leetcode-cn.com/problems/interleaving-string/submissions/
var isInterleave = function (s1, s2, s3) {
    console.log("isInterleave");
    console.log({ s1 });
    console.log({ s2 });
    console.log({ s3 });
    s1 = s1.split('');
    s2 = s2.split('');
    s3 = s3.split('');

    if (s1.length + s2.length != s3.length) return false;

    return judgeIteratorly(s3, s1, s2);

    function judgeIteratorly(target, s1, s2) {
        let stack = [];
        while (target.length > 0) {
            switch (true) {
                case s1.length == 0 && s2.length == 0: return isArrayEqual(target, stack);
                case s1.length == 0: return isArrayEqual(target, [...stack, ...s2]);
                case s2.length == 0: return isArrayEqual(target, [...stack, ...s1]);
                case target[0] == s1[0] && target[0] == s2[0]: {
                    stack.push(target.shift());
                    s1.shift();
                    s2.shift();
                    continue;
                }
                case target[0] == s1[0]: {
                    target.shift();
                    s1.shift();
                    if (stack.length > 0) {
                        s2.unshift(...stack);
                        stack = [];
                    }
                    continue;
                }
                case target[0] == s2[0]: {
                    target.shift();
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

function test1(s1, s2, s3) {
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

// test("Bahas", "Bananas from am", "Bananas from Bahamas");
// test("Bahas", "am", "Bahamas");
// console.log(isInterleave(...longInput));
test1(...input1);
// test(...longInput);
// console.log(longInput[0].length);
// console.log(longInput[1].length);
// console.log(longInput[2].length);
