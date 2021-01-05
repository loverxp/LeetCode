// https://leetcode-cn.com/problems/string-compression-ii/
var Test = require('./Common/Test');

var getLengthOfOptimalCompression = function (s, k) {
    const n = s.length;
    // const dp = Array.from({ length: n + 1 }, () => Array.from({ length: k }, () => Infinity));
    const dp = Array.from({ length: n + 1 }, () => Infinity);

    for (let i = 0; i < k; i++) {

    }



    /*
    const counters = [];
    let lastChar;
    for (const char of s) {
        if (lastChar == char) {
            counters[counters.length - 1][1]++;
        }
        else {
            lastChar = char;
            counters.push([char, 1]);
        }
    }

    function force() {

    }
    */
};

function test(s, k) {
    Test.test(getLengthOfOptimalCompression, s, k);
}

test("aaabcccd", 2);
test("aabbaa", 2);
test("aaaaaaaaaaa", 0);