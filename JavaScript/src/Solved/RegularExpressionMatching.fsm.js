// https://leetcode-cn.com/problems/regular-expression-matching/

var Test = require('./Common/Test');

var isMatch = function (s, p) {

    //0:true; 1:.,false; 2:*,

    const transitions = [

    ];

};

function test(s, p) {
    Test.test(isMatch, s, p);
}

test("aa", "a");
test("aa", "a*");
test("ab", ".*");
test("aab", "c*a*b");
test("mississippi", "mis*is*p*.");