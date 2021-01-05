// https://leetcode-cn.com/problems/longest-happy-prefix/
var Test = require('./Common/Test');

var longestPrefix = function (s) {
    const prefixes = new Set();
    for (let i = 1; i < s.length; i++) {
        prefixes.add(s.substring(0, i));
    }
    for (let i = 1; i < s.length; i++) {
        const postfix = s.substring(i, s.length);
        if (prefixes.has(postfix)) return postfix;
    }
    return "";
}

function test(s) {
    Test.test(longestPrefix, s);
}

test("level")
test("ababab")
test("leetcodeleet");
test("a")