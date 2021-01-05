// https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/
var Test = require('../Common/Test');

var findNumOfValidWords = function (words, puzzles) {
    words = words.map(toWordMask);
    puzzles = puzzles.map(puzzle => [1 << (puzzle.charCodeAt(0) - 97), toWordMask(puzzle)]);
    const result = [];
    for (const [first, puzzle] of puzzles) {
        let count = 0;
        for (const word of words) {
            if ((first == (first & word)) && (word == (word & puzzle))) {
                count++;
            }
        }
        result.push(count);
    }
    return result;

    function toWordMask(word) {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask |= (1 << (word.charCodeAt(i) - 97));
        }
        return mask;
    }
};

function test(words, puzzles) {
    Test.test(findNumOfValidWords, words, puzzles);
}

test(["aaaa", "asas", "able", "ability", "actt", "actor", "access"], ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]);
// test(['aaa', 'bbbb', 'll', 'e'], []);