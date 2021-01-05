// https://leetcode-cn.com/problems/remove-duplicate-letters/
var Test = require('./Common/Test');

var removeDuplicateLetters = function (s) {
    let str = "";
    for (const char of s) {
        if (char != str[str.length - 1]) {
            str += char;
        }
    }
    s = str + '{';

    const counter = Array(27).fill(0);
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97;
        counter[index]++;
    }

    let result = "";
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const count = getCharCount(i);
        const char = s[i];
        if (count > 0) {
            while (stack.length > 0 && char < s[stack[stack.length - 1]]) {
                const i = stack.pop();
                decCharCount(i);
            }
            if (count == 1) {
                for (const i of stack) {
                    result += s[i];
                    resetCharCount(i);
                }
                stack.length = 0;
                result += char;
            }
            else {
                stack.push(i);
            }
        }
    }
    return result.substring(0, result.length - 1);

    function getCharCount(i) {
        const index = s.charCodeAt(i) - 97;
        return counter[index];
    }

    function resetCharCount(i) {
        const index = s.charCodeAt(i) - 97;
        counter[index] = 0;
    }

    function decCharCount(i) {
        const index = s.charCodeAt(i) - 97;
        counter[index]--;
    }
};

function test(s) {
    Test.test(removeDuplicateLetters, s);
}


// test("aabbcccc");
// test("cac");
// test("ca");
// test("cdc");
// test("cadc");
test("cdca");
test("bcabc")
test("acbac")
test("cbabc")
// test("zamaz");


// test("bcabc");
// test("cbacdcbc");
// test("cbbbcaa");
// test("cbca");

