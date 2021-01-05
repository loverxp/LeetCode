// https://leetcode-cn.com/problems/word-break-ii/
var Test = require('./Common/Test');

var wordBreak = function (s, wordDict) {
    const result = [];
    backTracing(s, []);
    return result;

    function backTracing(s, words) {
        if (s.length == 0) {
            result.push(words.join(' '));
        }
        else {
            for (const word of wordDict) {
                if (s.startsWith(word)) {
                    words.push(word);
                    backTracing(s.substring(word.length), words);
                    words.pop();
                }
            }
        }
    }
};

function test(s, wordDict) {
    Test.test(wordBreak, s, wordDict);
}

// test("catsanddog", ["cat", "cats", "and", "sand", "dog"]);
// test("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]);
// test("catsandog", ["cats", "dog", "sand", "and", "cat"]);
test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"])