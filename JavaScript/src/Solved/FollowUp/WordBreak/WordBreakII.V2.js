// https://leetcode-cn.com/problems/word-break-ii/
var Test = require('./Common/Test');

var wordBreak = function (s, wordDict) {
    if (!check()) return [];
    const result = new Set();
    backTracing(0, "");
    return [...result];

    function check() {
        const charSet1 = new Set(s.split(''));
        const charSet2 = new Set(wordDict.join('').split(''));
        for (const char of charSet1) {
            if (!charSet2.has(char)) return false;
        }
        return true;
    }

    function backTracing(pos, sentence) {
        if (s.length == pos) {
            result.add(sentence.trim());
        }
        else {
            for (const word of wordDict) {
                if (s.startsWith(word, pos)) {
                    backTracing(pos + word.length, sentence + " " + word);
                }
            }
        }
    }
};

function test(s, wordDict) {
    console.log("length:", s.length);
    Test.test(wordBreak, s, wordDict);
}

test("catsanddog", ["cat", "cats", "and", "sand", "dog"]);
test("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]);
test("catsandog", ["cats", "dog", "sand", "and", "cat"]);
test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
// test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
// test("aaaaaaaaaaaaaaaaaaaaaaa",
    // ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
// test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    // , ["a"])