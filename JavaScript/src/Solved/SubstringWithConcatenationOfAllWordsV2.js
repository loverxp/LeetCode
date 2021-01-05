// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
var Test = require('../Common/Test');

var findSubstring = function (s, words) {
    if (s.length == 0 || words.length == 0) return [];

    const wordMap = {};
    for (const word of words) {
        if (!(word in wordMap)) {
            wordMap[word] = 0;
        }
        wordMap[word]++;
    }
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const result = [];

    for (let i = 0; i < wordLength; i++) {
        let sequence = [];
        for (let j = i; j < s.length; j += wordLength) {
            const word = s.substring(j, j + wordLength);
            if (word in wordMap) {
                if (wordMap[word] > 0) {
                    sequence.push(word);
                    wordMap[word]--;
                    if (sequence.length == words.length) {
                        result.push(j - totalLength + wordLength);
                        wordMap[sequence.shift()]++;
                    }
                }
                else {
                    do {
                        w = sequence.shift();
                        wordMap[w]++;
                    } while (w != word);
                    sequence.push(word);
                    wordMap[word]--;
                }
            }
            else {
                for (const word of sequence) {
                    wordMap[word]++;
                }
                sequence = [];
            }
        }
        for (const word of sequence) {
            wordMap[word]++;
        }
    }

    return result;
}

function test(s, words) {
    Test.test(findSubstring, s, words);
}

test("barfoothefoobarman", ["foo", "bar"]);
test("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]);
test("barfoofoobarthefoobarman", ["bar", "foo", "the"]);
test("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]);
test("aaaaaaaa", ["aa", "aa", "aa"]);

// "barfoothefoobarman"
// ["foo", "bar"]
// "wordgoodgoodgoodbestword"
// ["word", "good", "best", "word"]
// "barfoofoobarthefoobarman"
// ["bar", "foo", "the"]
// "wordgoodgoodgoodbestword"
// ["word", "good", "best", "good"]
// "aaaaaaaa"
// ["aa", "aa", "aa"]
