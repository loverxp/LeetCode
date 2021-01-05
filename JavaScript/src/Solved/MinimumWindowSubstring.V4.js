// https://leetcode-cn.com/problems/minimum-window-substring/
var Test = require('../Common/Test');

var minWindow = function (s, t) {
    const lackMap = {};
    let lackCount = 0;
    for (const char of t) {
        if (!(char in lackMap)) {
            lackMap[char] = 0;
            lackCount++;
        }
        lackMap[char]++
    }

    let l = r = 0;
    let [start, end] = [0, 0];
    while (l < s.length - t.length + 1 && r <= s.length) {
        if (lackCount == 0) {
            if (end == 0 || r - l < end - start) [start, end] = [l, r];
            const char = s[l++];
            if ((char in lackMap) && ++lackMap[char] == 1) lackCount++;
        }
        else {
            const char = s[r++];
            if ((char in lackMap) && --lackMap[char] == 0) lackCount--;
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