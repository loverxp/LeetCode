// https://leetcode-cn.com/problems/distinct-subsequences-ii/
var Test = require('../Common/Test');

var distinctSubseqII = function (s) {
    const mod = 1000000007;
    const dp = Array(s.length + 1).fill(0);
    const lastOccurs = Array(26).fill();
    dp[0] = 1;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charIndex = char.charCodeAt(0)-97;
        const lastOccur = lastOccurs[charIndex];
        dp[i + 1] = (dp[i] * 2 - (lastOccur == undefined ? 0 : dp[lastOccur] )) % mod;
        lastOccurs[charIndex] = i;
    }
    return (dp[s.length] + mod) % mod - 1;
};

function test(s) {
    Test.test(distinctSubseqII, s);
}

// test("abc");
// test("aba");
// test("aab");
// test("abaa");
// test("aaba");
// test("aa");
// test("aaa");
// test("aaaa");
// test("zchmliaqdgvwncfatcfivphddpzjkgyygueikthqzyeeiebczqbqhdytkoawkehkbizdmcnilcjjlpoeoqqoqpswtqdpvszfaksn");
// test("blljuffdyfrkqtwfyfztpdiyktrhftgtabxxoibcclbjvirnqyynkyaqlxgyybkgyzvcahmytjdqqtctirnxfjpktxmjkojlvvrr");


// "abc"
// "aba"
// "aab"
// "abaa"
// "aaba"
// "aa"
// "aaa"
// "aaaa"
// "zchmliaqdgvwncfatcfivphddpzjkgyygueikthqzyeeiebczqbqhdytkoawkehkbizdmcnilcjjlpoeoqqoqpswtqdpvszfaksn"
// "blljuffdyfrkqtwfyfztpdiyktrhftgtabxxoibcclbjvirnqyynkyaqlxgyybkgyzvcahmytjdqqtctirnxfjpktxmjkojlvvrr"