// https://leetcode-cn.com/problems/word-ladder-ii/
var Test = require('../Common/Test');

var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return [];

    let level = [{ word: beginWord }];
    while (level.length > 0) {
        const newLevel = [];
        const result = [];
        for (const prev of level) {
            for (const word of wordSet) {
                if (isAdjacent(prev.word, word)) {
                    let node = { word, prev };
                    newLevel.push(node);
                    if (word == endWord) {
                        const path = [];
                        result.push(path);
                        while (node) {
                            path.unshift(node.word);
                            node = node.prev;
                        }
                    }
                }
            }
        }
        if (result.length > 0) {
            return result;
        }
        else {
            level = newLevel;
            for (const node of level) {
                wordSet.delete(node.word);
            }
        }
    }
    return [];

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