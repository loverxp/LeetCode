// https://leetcode-cn.com/problems/stream-of-characters/
const { testWithInstructions } = require("../Common/Test");

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

    put(char) {
        const node = new TrieNode();
        this.links[this.charIndex(char)] = node;
    }

    charIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}

class StreamChecker {
    constructor(words) {
        this.nodes = [];
        this.root = new TrieNode();
        words.forEach(word => {
            let node = this.root;
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                if (!node.containsKey(char)) {
                    node.put(char);
                }
                node = node.get(char);
            }
            node.isEnd = true;
        });
    }

    query(letter) {
        const nodes = [];
        for (const node of this.nodes) {
            const next = node.get(letter);
            if (next) {
                nodes.push(next);
            }
        }
        const node = this.root.get(letter);
        if (node) {
            nodes.push(node);
        }
        this.nodes = nodes;
        for (const node of nodes) {
            if (node.isEnd) return true;
        }
        return false;
    }
}

function logQuery(streamChecker, letter) {
    console.log(streamChecker.query(letter));
}

function test(ops, params) {
    console.log(params[0][0]);
    testWithInstructions(StreamChecker, ops, params);
}

function test1() {
    const streamChecker = new StreamChecker(["cd", "f", "kl"]); // init the dictionary.
    logQuery(streamChecker, 'a');          // return false
    logQuery(streamChecker, 'b');          // return false
    logQuery(streamChecker, 'c');          // return false
    logQuery(streamChecker, 'd');          // return true, because 'cd' is in the wordlist
    logQuery(streamChecker, 'e');          // return false
    logQuery(streamChecker, 'f');          // return true, because 'f' is in the wordlist
    logQuery(streamChecker, 'g');          // return false
    logQuery(streamChecker, 'h');          // return false
    logQuery(streamChecker, 'i');          // return false
    logQuery(streamChecker, 'j');          // return false
    logQuery(streamChecker, 'k');          // return false
    logQuery(streamChecker, 'l');          // return true, because 'kl' is in the wordlist
}

// test1();

ops1 = ["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"];
params1 = [[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]];
// ops2 = ["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"];
// params2 = [[["ab", "ba", "aaab", "abab", "baa"]], ["a"], ["a"], ["a"], ["a"], ["a"], ["b"], ["a"], ["b"], ["a"], ["b"], ["b"], ["b"], ["a"], ["b"], ["a"], ["b"], ["b"], ["b"], ["b"], ["a"], ["b"], ["a"], ["b"], ["a"], ["a"], ["a"], ["b"], ["a"], ["a"], ["a"]];
ops2 = ["StreamChecker", "query", "query", "query"];
params2 = [[["ab", "ba", "aaab", "abab", "baa"]], ["a"], ["b"], ["a"]];

// var Test = require('./Common/Test');

// Test.testWithInstructions(ops1, params1);
// testWithInstructions
// test(ops1, params1);
test(ops2, params2);

function testSet() {
    let set = new Set([1, 2, 3]);
    // const newSet = 
    for (const val of set) {
        console.log(val);
        set.delete(val);
        set.add(val + 10);
    }
}
// 
// testSet();