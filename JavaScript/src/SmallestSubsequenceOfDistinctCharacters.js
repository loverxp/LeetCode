// https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/
var Test = require('./Common/Test');

var smallestSubsequence = function (s) {
    s += '{';

    const counter = Array(27).fill(0);
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97;
        counter[index]++;
    }

    let result = "";
    let existsMask = 0;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (getCharCount(i) > 0) {
            const mask = 1 << s.charCodeAt(i) - 97;
            if (existsMask & mask) {
                decCharCount(i);
            }
            else {
                const char = s[i];
                let topValue;
                while (stack.length > 0 && (topValue = stack[stack.length - 1], char <= s[topValue] && getCharCount(topValue) > 1)) {
                    decCharCount(topValue);
                    const mask = ~(1 << s.charCodeAt(topValue) - 97);
                    existsMask &= mask;
                    stack.pop();
                }
                if (getCharCount(i) == 1) {
                    for (const i of stack) {
                        result += s[i];
                        resetCharCount(i);
                    }
                    stack.length = 0;
                    existsMask = 0;
                    result += char;
                }
                else {
                    stack.push(i);
                    existsMask |= mask;
                }
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
    Test.test(smallestSubsequence, s);
}


test("aabbcccc");
test("cac");
test("ca");
test("cdc");
test("cadc");
test("cdca");
test("bcabc")
test("acbac")
test("cbabc")
test("zamaz");

test("ecbacba");

test("bcabc");
test("cbacdcbc");
test("cbca");
test("cccbdbda");

test("cbbbcaa");
test("ccacbaba");

test("abacb");