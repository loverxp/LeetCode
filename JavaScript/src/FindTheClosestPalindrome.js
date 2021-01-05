// https://leetcode-cn.com/problems/find-the-closest-palindrome/
var Test = require('./Common/Test');

var nearestPalindromic = function (n) {
    n = n.split('');
    for (let i = 0; i < Math.ceil(n.length / 2); i++) {
        const rightIndex = n.length - i - 1;
        if (n[i] != n[rightIndex]) n[rightIndex] = n[i];
    }
    return n.join('');
};

function test(n) {
    Test.test(nearestPalindromic, n);
}

test("1234");
test("1000");
test("12932");
test("99800");
test("12120");

// "1234"
// "1000"
// "12932"
// "99800"
// "12120"