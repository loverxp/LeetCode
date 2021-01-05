// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
var Test = require('../Common/Test');

class TrieNode {
    constructor(prefix) {
        this.links = {};
        this.isWordEnd = false;
        this.prefix = prefix != undefined ? prefix : "";
    }

    containsKey(char) {
        return char in this.links;
    }

    get(char) {
        return this.links[char];
    }

    put(char) {
        this.links[char] = new TrieNode(this.prefix + char);
    }
}

class Trie {
    constructor(words) {
        this.root = new TrieNode();
        for (const word of words) {
            this.insert(word);
        }
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
        node.isWordEnd = true;
    };
}

var findSubstring = function (s, words) {
    // console.log("findSubstring");
    
    const wordMap = {};
    for (const word of words) {
        if (!(word in wordMap)) {
            wordMap[word] = 0;
        }
        wordMap[word]++;
    }

    const totalLength = words.reduce((length, word) => length + word.length, 0);

    const trie = new Trie(words);
    let trieNode = trie.root;
    let sequence = [];
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // console.log();
        // console.log({ i });
        // console.log({ char });
        // console.log(trieNode);
        // console.log(sequence);
        // console.log(wordMap);

        // console.log(result);

        if (trieNode.containsKey(char)) {
            trieNode = trieNode.get(char);
            if (trieNode.isWordEnd) {
                const word = trieNode.prefix;
                trieNode = trie.root;
                // console.log("aaaaaaa");
                
                // if ((prefix in wordMap) && wordMap[prefix] > 0) {
                if (wordMap[word] > 0) {
                    sequence.push(word);
                    wordMap[word]--;
                    if (sequence.length == words.length) {
                        result.push(i - totalLength + 1);
                        wordMap[sequence.shift()]++;
                    }
                }
                else {
                    console.log();
                    console.log();
                    console.log({ word });
                    console.log("before:");
                    console.log(sequence);
                    console.log(wordMap);
                    // for (const word of sequence) {
                    //     wordMap[word]++;
                    // }
                    // sequence = [word];
                    console.log("for:");
                    // for (const w of sequence) {
                    // console.log({ w });
                    // sequence.shift();
                    // wordMap[w]++;
                    // if (word == w) break;
                    // }
                    // let w;
                    do {
                        w = sequence.shift();
                        wordMap[w]++;
                    } while (w != word);

                    console.log("mid:");
                    console.log(sequence);

                    sequence.push(word);
                    wordMap[word]--;

                    console.log("after:");
                    console.log(sequence);
                    console.log(wordMap);
                }
            }
        }
        else {
            trieNode = trie.root;
            for (const word of sequence) {
                wordMap[word]++;
            }
            sequence = [];
        }
    }
    return result;
};

function test(s, words) {
    Test.test(findSubstring, s, words);
}

// test("barfoothefoobarman", ["foo", "bar"]);
// test("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]);
// test("barfoofoobarthefoobarman", ["bar", "foo", "the"]);
// test("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]);
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
