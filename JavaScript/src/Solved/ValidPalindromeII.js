// https://leetcode-cn.com/problems/valid-palindrome-ii/
var Test = require('../Common/Test');

var validPalindrome = function (s) {
    let i = 0; j = s.length - 1;
    while (s[i] == s[j] && i++ < j--);
    return trySkip(i + 1, j) || trySkip(i, j - 1);

    function trySkip(i, j) {
        while (i <= j) {
            if (s[i++] != s[j--]) return false;
        }
        return true;
    }
};

function test(s) {
    Test.test(validPalindrome, s);
}

test("");
test("c");
test("abba");
test("abca");
test("abcba");
test("abcda");
test("abdbca");