// https://leetcode-cn.com/problems/word-break/
var Test = require('./Common/Test');

var wordBreak = function (s, wordDict) {
    const memo = new Set();
    return backTracing(0, "");

    function backTracing(start) {
        if (memo.has(start)) {
            console.log("memo has " + start);
            return false;
        }
        else {
            memo.add(start);
            if (start == s.length) {
                return true;
            }
            else {
                for (const word of wordDict) {
                    if (s.startsWith(word, start)) {
                        if (backTracing(start + word.length)) return true;
                    }
                }
                return false;
            }
        }
    }
};

function test(s, wordDict) {
    Test.test(wordBreak, s, wordDict);
}

// test("leetcode", ["leet", "code"]);
// test("applepenapple", ["apple", "pen"]);
// test("catsandog", ["cats", "dog", "sand", "and", "cat"]);
// test("catsanddog", ["cat", "cats", "and", "sand", "dog"]);
// test("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]);
// test("catsandog", ["cats", "dog", "sand", "and", "cat"]);
// test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
