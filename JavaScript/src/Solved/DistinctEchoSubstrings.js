// https://leetcode-cn.com/problems/distinct-echo-substrings/
var Test = require('../Common/Test');

var distinctEchoSubstrings = function (text) {
    const halfLength = text.length / 2;
    const subStrings = new Set();
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j <= Math.min(text.length, i + halfLength); j++) {
            subStrings.add(text.substring(i, j));
        }
    }
    let result = 0;
    for (const sub of subStrings) {
        if (text.includes(sub + sub)) result++;
    }
    return result;
};

function test(text) {
    Test.test(distinctEchoSubstrings, text);
}

// test("abcabcabc");
// test("leetcodeleetcode");
// test("leetcodeleetcodel");
// test(" leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode ");
test(" leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode");

// " leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode leetcodeleetcode "