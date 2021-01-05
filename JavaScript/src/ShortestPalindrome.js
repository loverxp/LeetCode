// https://leetcode-cn.com/problems/shortest-palindrome/
var Test = require('./Common/Test');

var shortestPalindrome = function (s) {
    for (i = 0; i < s.length - 1 && !isPalindrome(s.length - i); i++);
    let prefix = "";
    for (let j = 0; j < i; j++) {
        prefix += s[s.length - j - 1];
    }
    return prefix + s;

    function isPalindrome(length) {
        for (let i = 0; i < Math.ceil(length / 2); i++) {
            if (s[i] != s[length - i - 1]) return false;
        }
        return true;
    }
};

function test(s) {
    Test.test(shortestPalindrome, s);
}

test("aacecaaa");
test("abcd");