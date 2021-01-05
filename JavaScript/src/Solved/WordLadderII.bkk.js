// https://leetcode-cn.com/problems/word-ladder-ii/
var Test = require('../Common/Test');

var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return [];

    let level = [{ word: beginWord }];
    while (level.length > 0) {
        const newLevel = [];
        let findShortestedPath = false;
        for (const prev of level) {
            for (const word of wordSet) {
                if (isAdjacent(prev.word, word)) {
                    newLevel.push({ word, prev });
                    if(!findShortestedPath) findShortestedPath = word == endWord;
                }
            }
        }
        level = newLevel;
        if (!findShortestedPath) {
            for (const node of level) {
                wordSet.delete(node.word);
            }
        }
        else {
            break;
        }
    }

    const result = [];
    for (let node of level) {
        if (node.word == endWord) {
            const path = [];
            result.push(path);
            while (node) {
                path.unshift(node.word);
                node = node.prev;
            }
        }
    }
    return result;

    function isAdjacent(word1, word2) {
        let distance = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] != word2[i]) distance++;
        }
        return distance == 1;
    }
};


function test(beginWord, endWord, wordList) {
    Test.test(findLadders, beginWord, endWord, wordList);
}

// test("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
// test("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
// test("a", "c", ["a", "b", "c"]);
// test("hot", "dog", ["hot", "dog"]);
test("lost", "miss", ["most", "mist", "miss", "lost", "fist", "fish"]);

// "hit"
// "cog"
// ["hot", "dot", "dog", "lot", "log", "cog"]
// "hit"
// "cog"
// ["hot", "dot", "dog", "lot", "log"]
// "a"
// "c"
// ["a", "b", "c"]
// "hot"
// "dog"
// ["hot", "dog"]
// "lost"
// "miss"
// ["most", "mist", "miss", "lost", "fist", "fish"]