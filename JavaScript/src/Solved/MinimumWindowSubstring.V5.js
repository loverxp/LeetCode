// https://leetcode-cn.com/problems/minimum-window-substring/
var Test = require('../Common/Test');

var minWindow = function (s, t) {
    const lackMap = new Map();
    for (const char of t) {
        if (!lackMap.has(char)) {
            lackMap.set(char, 0);
        }
        lackMap.set(char, lackMap.get(char) + 1);
    }
    let lackCount = lackMap.size;

    let l = r = 0;
    let [start, end] = [0, 0];
    while (l < s.length - t.length + 1 && r <= s.length) {
        if (lackCount == 0) {
            if (end == 0 || r - l < end - start) [start, end] = [l, r];
            const char = s[l++];
            if (lackMap.has(char)) {
                const charCount = lackMap.get(char);
                if (charCount == 0) lackCount++;
                lackMap.set(char, charCount + 1);
            }
        }
        else {
            const char = s[r++];
            if (lackMap.has(char)) {
                const charCount = lackMap.get(char);
                if (charCount == 1) lackCount--;
                lackMap.set(char, charCount - 1);
            }
        }
    }

    return s.slice(start, end);
};

function test(s, t) {
    Test.test(minWindow, s, t);
}

test("ADOBECODEBANC", "ABC");
test("ADOBECODEBANC", "AB");
test("ADOBECODEBANCABC", "ABC");
test("ADOBECODEBANCABC", "CAB");
test("ADOBECODEBANABC", "CAB");
test("ADOBECODEBANABC", "ABC");
test("a", "aa");