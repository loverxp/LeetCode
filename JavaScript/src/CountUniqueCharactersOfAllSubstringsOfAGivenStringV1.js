// https://leetcode-cn.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
var Test = require('./Common/Test');

var uniqueLetterString = function (s) {
    const mod = 1e9 + 7;
    const n = s.length;
    let count = 0;
    for (let i = 0; i < s.length; i++) {

        const set = new Set();
        const uniqueSet = new Set();
        for (let j = i; j < s.length; j++) {
            const char = s[j];
            if (!set.has(char)) {
                set.add(char);
                uniqueSet.add(char);
            }
            else {
                uniqueSet.delete(char);
            }
            count += uniqueSet.size;
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