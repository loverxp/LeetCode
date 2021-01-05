// https://leetcode-cn.com/problems/valid-palindrome/
var Test = require('../Common/Test');
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) return false;
    }
    return true;
};

function test(s) {
    Test.test(isPalindrome, s);
}

test("abba");
test("abca");
test("abcba");
test("abcda");
test("A man, a plan, a canal: Panama");
test("race a car 100");