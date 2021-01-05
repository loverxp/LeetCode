// https://leetcode-cn.com/problems/longest-happy-prefix/
var Test = require('../Common/Test');

var longestPrefix = function (s) {
    const len = s.length;
    for (let i = len - 1; i > 0; i--) {
        const prefix = s.substring(0, i);
        const suffix = s.substring(len - i, len);
        if (prefix == suffix) return prefix;
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