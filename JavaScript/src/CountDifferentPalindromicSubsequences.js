// https://leetcode-cn.com/problems/count-different-palindromic-subsequences/
var Test = require('./Common/Test');

var countPalindromicSubsequences = function (s) {
    // return isPalindromic(s);

};

function isPalindromic(s) {
    for (let i = 0; i < Math.ceil(s.length / 2); i++) {
        if (s[i] != s[s.length - i - 1]) return false;
    }
    return true;
}

function test(s) {
    Test.test(countPalindromicSubsequences, s);
}

test('bccb');
test('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba');
// test('bccbd');
// test('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcbda');

test('a')
test('aba')
test('abba')