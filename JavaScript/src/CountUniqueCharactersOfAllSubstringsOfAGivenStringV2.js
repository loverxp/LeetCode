// https://leetcode-cn.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
var Test = require('./Common/Test');

var uniqueLetterString = function (s) {
    const mod = 1e9 + 7;
    const n = s.length;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let lettersMask = 0;
        let uniqueMask = 0;
        let uniqueCount = 0;
        for (let j = i; j < s.length; j++) {
            const charMask = 1 << (s.charCodeAt(j) - 65);
            if (lettersMask & charMask) {
                if (uniqueMask & charMask) {
                    uniqueMask ^= charMask;
                    uniqueCount--;
                }
            }
            else {
                lettersMask |= charMask;
                uniqueMask |= charMask;
                uniqueCount++;
            }
            count += uniqueCount;
            count %= mod;
        }
    }
    return count;
};

function test(s) {
    Test.test(uniqueLetterString, s);
}

function testWithTestcase(id) {
    Test.testWithTestcase(uniqueLetterString, id);
}

// test("ABC")
// test("ABA")
// test("LEETCODE")
testWithTestcase(95468092);