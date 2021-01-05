// https://leetcode-cn.com/problems/last-substring-in-lexicographical-order/
var Test = require('../Common/Test');

var lastSubstring = function (s) {
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        let j = 0;
        while (i + j < s.length && s[i + j] == s[index + j]) j++;
        if (i + j < s.length && s[i + j].localeCompare(s[index + j]) > 0) index = i;
    }
    return s.slice(index);
};

function test(s) {
    Test.test(lastSubstring, s);
}

// test("abab");
// test("leetcode");
// test("cacacb");

// https://leetcode-cn.com/submissions/detail/82888274/testcase/
