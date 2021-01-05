// https://leetcode-cn.com/problems/maximum-score-words-formed-by-letters/
var Test = require('../Common/Test');

var maxScoreWords = function (words, letters, scores) {
    words = words.map(word => makeCounter(word));
    letters = makeCounter(letters);
    let maxScore = 0;
    let states = new Map();
    states.set(0, [letters, 0]);
    while (states.size) {
        const states2 = new Map();
        for (const [usedWords, [letters, score]] of states) {
            for (let i = 0; i < words.length; i++) {
                const mask = 1 << i;
                const newUsedWords = usedWords | mask;
                if (!(usedWords & mask) && !states2.has(newUsedWords)) {
                    const remainLetters = new Map(letters);
                    let newScore = score;
                    let success = true;
                    for (const [letter, count] of words[i]) {
                        if (!remainLetters.has(letter) || count > remainLetters.get(letter)) {
                            success = false;
                        }
                        else {
                            remainLetters.set(letter, remainLetters.get(letter) - count);
                            newScore += count * scores[letter];
                        }
                    }
                    if (success) {
                        states2.set(newUsedWords, [remainLetters, newScore]);
                        maxScore = Math.max(maxScore, newScore);
                    }
                }
            }
        }
        states = states2;
    }
    return maxScore;

    function makeCounter(collection) {
        const counter = new Map();
        for (let char of collection) {
            char = char.charCodeAt(0) - 97;
            if (!counter.has(char)) {
                counter.set(char, 1);
            }
            else {
                counter.set(char, counter.get(char) + 1);
            }
        }
        return counter;
    }
};

function test(words, letters, scores) {
    Test.test(maxScoreWords, words, letters, scores);
}

test(["dog", "cat", "dad", "good"], ["a", "a", "c", "d", "d", "d", "g", "o", "o"], [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
test(["xxxz", "ax", "bx", "cx"], ["z", "a", "b", "c", "x", "x", "x"], [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10]);
test(["leetcode"], ["l", "e", "t", "c", "o", "d"], [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
