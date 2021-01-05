// https://leetcode-cn.com/problems/word-rectangle-lcci/
var Test = require('../Common/Test');

class TrieNode {
    constructor() {
        this.links = Array(26).fill();
        this.isEnd = false;
    }

    containsKey(char) {
        return this.links[this.charIndex(char)] != undefined;
    }

    get(char) {
        return this.links[this.charIndex(char)];
    }

    put(char, node) {
        this.links[this.charIndex(char)] = node;
    }

    charIndex(char) {
        return char.charCodeAt(0) - 97;     // 'a'.charCodeAt(0)
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
                node.put(char, new TrieNode());
            }
            node = node.get(char);
        }
        node.isEnd = true;
    };
}

var maxRectangle = function (words) {
    const wordGroups = {};
    const trie = new Trie();
    for (const word of words) {
        const length = word.length;
        if (!(length in wordGroups)) {
            wordGroups[length] = new Set();
        }
        wordGroups[length].add(word);
        trie.insert(word);
    }

    let maxSize = 0;
    let result = [];
    for (let wordLength in wordGroups) {
        wordLength = parseInt(wordLength);
        backTracing([], wordGroups[wordLength], wordLength, Array(wordLength).fill(trie.root));
    }
    return result;


    function backTracing(sequence, words, wordLength, trieNodes) {
        for (const word of words) {
            const newTrieNodes = [];
            let isEnd = true;
            for (let i = 0; i < wordLength; i++) {
                const char = word[i];
                const trieNode = trieNodes[i].get(char);
                if (!trieNode) break;
                isEnd = isEnd && trieNode.isEnd;
                newTrieNodes.push(trieNode);
            }
            if (newTrieNodes.length == wordLength) {
                sequence.push(word);
                if (isEnd) {
                    const size = wordLength * sequence.length;
                    if (maxSize < size) {
                        maxSize = size;
                        result = Array.from(sequence);
                    }
                }
                backTracing(sequence, wordGroups[wordLength], wordLength, newTrieNodes);
                sequence.pop();
            }
        }
    }
};

function test(words) {
    Test.test(maxRectangle, words);
}

test(["this", "real", "hard", "trh", "hea", "iar", "sld"]);
test(["aa"]);

function testArray() {
    const array = Array(10).fill({ a: 1 });
    console.log(array);
    array[0].a = 4;
    console.log(array);
}

// testArray();
// https://leetcode-cn.com/submissions/detail/49939048/testcase/
// https://leetcode-cn.com/submissions/detail/50048540/testcase/