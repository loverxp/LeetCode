// https://leetcode-cn.com/problems/last-substring-in-lexicographical-order/
var Test = require('../Common/Test');

var lastSubstring = function (s) {
    const length = s.length;
    let index = length - 1;
    for (let i = index - 1; i >= 0; i--) {
        if (index == i + 1 && s[i] == s[index]) {
            index = i;
        }
        else {
            for (j = 0; index + j < length, s[i + j] == s[index + j]; j++);
            if (index + j == length || s[i + j].localeCompare(s[index + j]) > 0) index = i;
        }
    }
    return s.slice(index);
};

function test(s) {
    Test.test(lastSubstring, s);
}

// for ( i = 0; i < 10; i++);
// console.log({i});


test("abab");
// test("abababababababababababababababababababababababababababababababababababababababab");
test("leetcode");
test("cacacb");

// https://leetcode-cn.com/submissions/detail/82888274/testcase/
