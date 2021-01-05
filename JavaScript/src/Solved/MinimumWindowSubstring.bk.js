// https://leetcode-cn.com/problems/minimum-window-substring/
var Test = require('../Common/Test');

var minWindow = function (s, t) {
    const lackMap = {};
    for (const char of t) {
        if (!(char in lackMap)) {
            lackMap[char] = 0;
        }
        lackMap[char]++
    }
    const lackSet = new Set(Object.keys(lackMap));
    // const targetCharSet = new Set(Object.keys(lackMap));
    const targetCharSet = new Set(lackSet);
    // const targetCharSet = Object.assign({}, lackSet);

    console.log(lackMap);
    console.log(lackSet);
    console.log(targetCharSet);

    let l = r = 0;
    let [min, max] = [0, 0];
    while (l < s.length - t.length + 1 && r <= s.length) {
        console.log();
        console.log({ l, r });
        console.log(s.slice(l, r));
        console.log(lackMap);
        console.log(lackSet);

        if (lackSet.size == 0) {
            if (max == 0 || r - l < max - min) [min, max] = [l, r];
            const char = s[l++];
            if (targetCharSet.has(char) && ++lackMap[char] > 0) lackSet.add(char);
        }
        else {
            const char = s[r++];
            if (targetCharSet.has(char) && --lackMap[char] <= 0) lackSet.delete(char);
        }
    }

    return s.slice(min, max);
};

function test(s, t) {
    Test.test(minWindow, s, t);
}

// test("ADOBECODEBANC", "ABC");
// test("ADOBECODEBANC", "AB");
// test("ADOBECODEBANCABC", "ABC");
// test("ADOBECODEBANCABC", "CAB");
// test("ADOBECODEBANABC", "CAB");
// test("ADOBECODEBANABC", "ABC");
// test("a", "aa");