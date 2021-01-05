// https://leetcode-cn.com/problems/word-ladder-ii/
var Test = require('../Common/Test');

var findLadders = function (beginWord, endWord, wordList) {
    if (wordList.includes(beginWord)) return [beginWord];
    if (!wordList.includes(endWord)) return [];

    let node;
    const set = new Set(wordList);
    const queue = [{ word: beginWord }];
    while (queue.length > 0) {
        const prev = queue.shift();
        for (const word of set) {
            if (isAdjacent(prev.word, word)) {
                const current = { word, prev };
                if (word == endWord) {
                    node = current;
                    break;
                }
                else {
                    queue.push(current);
                    set.delete(word);
                }
            }
        }
    }
    const result = [];
    while (node) {
        result.unshift(node.word);
        node = node.prev;
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

test("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
test("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);