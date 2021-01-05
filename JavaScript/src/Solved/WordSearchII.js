// https://leetcode-cn.com/problems/word-search-ii/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix')

class TrieNode {
    constructor() {
        this.links = Array(26).fill();
        this.isEnd = true;      //TODO:mark the ending of words
        this.prefix = "";
    }

    containsKey(char) {
        return this.links[this.charIndex(char)] != undefined;
    }

    get(char) {
        return this.links[this.charIndex(char)];
    }

    put(char) {
        const node = new TrieNode();
        node.prefix = this.prefix + char;
        this.links[this.charIndex(char)] = node;
        this.isEnd = false;
    }

    charIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.containsKey(char)) {
                node.put(char);
            }
            node = node.get(char);
        }
    };
}

var findWords = function (board, words) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const trie = new Trie();
    const dict = new Set(words);
    const resultSet = new Set();

    words.forEach(word => trie.insert(word));

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            search([j, i], trie.root, new Set());
        }
    }

    return [...resultSet].sort();

    function search([x, y], prevNode, visitedSet) {
        if (x >= 0 && x < board[0].length && y >= 0 && y < board.length) {
            const char = board[y][x];
            if (prevNode.containsKey(char)) {
                const key = `${x},${y}`;
                if (!visitedSet.has(key)) {
                    visitedSet.add(key);
                    const node = prevNode.get(char);
                    console.log({ prefix: node.prefix });

                    if (dict.has(node.prefix)) resultSet.add(node.prefix);
                    if (!node.isEnd) {
                        for (let i = 0; i < dirs.length; i++) {
                            const [offsetX, offsetY] = dirs[i];
                            search([x + offsetX, y + offsetY], node, visitedSet);
                        }
                    }
                    visitedSet.delete(key);
                }
            }
        }
    }
};

function test(board, words) {
    Matrix.logMatrixInArray(board);
    Test.test(findWords, board, words);
}

board1 = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']];
word1 = ["oath", "pea", "eat", "rain"];

board2 = [["a", "b"], ["c", "d"]];
word2 = ["ab", "cb", "ad", "bd", "ac", "ca", "da", "bc", "db", "adcb", "dabc", "abb", "acb"]
// word2 = ["ab", "cb", "ad", "bd", "ac"];
// word2 = ["ab", "ac"];
// word2 = ["ac"];

board3 = [["a", "b"], ["a", "a"]];
word3 = ["aba", "baa", "bab", "aaab", "aaa", "aaaa", "aaba"]

board4 = [["a", "b", "c"], ["a", "e", "d"], ["a", "f", "g"]];
// word4 = ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"];
word4 = ["eaabcdgfa"];
//result4 = ["abcdefg","befa","eaabcdgfa","gfedcbaaa"]

// test(board1, word1);
// test(board2, word2);
// test([["a", "a"]], ["a"]);
// test(board3, word3);
// test([["a", "b"], ["c", "d"]], ["acdb"]);
test(board4, word4);


// [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]]
// ["oath", "pea", "eat", "rain"]
// [["a", "a"]]
// ["a"]
// [["a", "b"], ["c", "d"]]
// ["ab", "cb", "ad", "bd", "ac", "ca", "da", "bc", "db", "adcb", "dabc", "abb", "acb"]
// [["a", "b"], ["a", "a"]]
// ["aba", "baa", "bab", "aaab", "aaa", "aaaa", "aaba"]
// [["a", "b"], ["c", "d"]]
// ["acdb"]
[["a", "b", "c"], ["a", "e", "d"], ["a", "f", "g"]]
["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"]