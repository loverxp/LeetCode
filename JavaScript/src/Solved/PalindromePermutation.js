// https://leetcode-cn.com/problems/valid-palindrome-ii/
var Test = require('../Common/Test');

var canPermutePalindrome = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        }
        else {
            map.set(char, 1);
        }
    }
    let violated = false;
    for (const [_, value] of map) {
        if (value % 2 != 0) {
            if (!violated) {
                violated = true;
            }
            else {
                return false;
            }
        }
    }
    return true;
};

function test(s) {
    Test.test(canPermutePalindrome, s);
}

test("");
test("tactcoa");
test("taactcoa");
test("talctllcoa");