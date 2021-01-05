// https://leetcode-cn.com/problems/palindrome-number/
var Test = require('../../Common/Test');
var isPalindrome = function(x) {
    if (x < 0) return false;
    s = x.toString();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) return false;
    }
    return true;
};

function test(x) {
    Test.test(isPalindrome, x);
}

test(0);
test(-111);
test(12321);