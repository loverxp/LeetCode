// https://leetcode-cn.com/problems/word-break-ii/
var Test = require('../Common/Test');

var wordBreak = function (s, wordDict) {
    // return s.startsWith('a',75);
    // return s.startsWith('a',70);
    // const result = [];
    const result = new Set();
    const memo = new Set();
    // const 
    // backTracing(0, []);
    backTracing(0, "");
    return [...result];

    function backTracing(pos, sentence) {
        // const key = `${pos},${sentence}`;
        const key = sentence;
        if (!memo.has(key)) {
            memo.add(key);

            // console.log();
            // console.log({ pos });
            // console.log({ words });
            if (s.length == pos) {
                // console.log("1");
                // console.log({ words });
                result.add(sentence);
            }
            else {
                // console.log("2");
                for (const word of wordDict) {
                    // console.log({ word });
                    // console.log(s.startsWith(word, pos));
                    if (s.startsWith(word, pos)) {
                        // sentence.push(word);
                        backTracing(pos + word.length, sentence + " " + word);
                        // sentence.pop();
                    }
                }
            }
        }
        else {
            console.log({ key });
        }
    }
};

function test(s, wordDict) {
    console.log("length:", s.length);
    Test.test(wordBreak, s, wordDict);
}

// test("catsanddog", ["cat", "cats", "and", "sand", "dog"]);
// test("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]);
// test("catsandog", ["cats", "dog", "sand", "and", "cat"]);
// test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
// test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
test("aaaaaaaaaaaaaaaaaaaaaaa",
    ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
// test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    // , ["a"])