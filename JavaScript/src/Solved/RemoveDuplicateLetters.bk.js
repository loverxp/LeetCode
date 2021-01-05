// https://leetcode-cn.com/problems/remove-duplicate-letters/
var Test = require('./Common/Test');

var removeDuplicateLetters = function (s) {
    // let str = "";
    // for (const char of s) {
    //     if (char != str[str.length - 1]) {
    //         str += char;
    //     }
    // }
    // s = str + '{';
    s += '{';

    console.log({ s });
    const counter = Array(27).fill(0);
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97;
        counter[index]++;
    }

    // let result = getCharCount(0) == 1 ? s[0] : "";
    // let stack = getCharCount(0) > 1 ? [0] : [];
    let result = "";
    let existsMask = 0;
    const stack = [];
    // let stack = [];
    // for (let i = 1; i < s.length; i++) {
    for (let i = 0; i < s.length; i++) {
        // console.log();

        if (getCharCount(i) > 0) {
            const char = s[i];
            // while (stack.length > 0) {
            // const i = stack[stack.length - 1];
            // while (stack.length > 0 && char <= s[stack[stack.length - 1]]) {
            let topValue;
            while (stack.length > 0 && (topValue = stack[stack.length - 1], char <= s[topValue] && getCharCount(topValue) > 1)) {
                // const i = stack[stack.length - 1];
                // const i = stack.pop();
                stack.pop();
                // console.log("pop:", i);
                // counter[i]--;
                // decCharCount(i);
                decCharCount(topValue);
            }
            if (getCharCount(i) == 1) {
                for (const i of stack) {
                    result += s[i];
                    resetCharCount(i);
                }
                // stack = [];
                stack.length = 0;
                existsMask = 0;
                result += char;
            }
            else {
                // const index = s.charCodeAt(i) - 97;
                const mask = 1 << s.charCodeAt(i) - 97;
                if (existsMask & mask) {
                    decCharCount(i);
                }
                else {
                    stack.push(i);
                    // existsMask.add(i);
                    existsMask |= mask;
                }
            }
        }
        // console.log({ i, char, result });
        // console.log({ stack });
        // console.log({ counter });
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
// test("cdca");
// test("bcabc")
// test("acbac")
// test("cbabc")
// test("zamaz");


// test("bcabc");
// test("cbacdcbc");
// test("cbbbcaa");
// test("cbca");
// test("ccacbaba");
// test("cccbdbda");

test("abacb");