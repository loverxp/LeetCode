// https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
        this.prefix = "";
    }

    containsKey(char) {
        return this.children[char] != undefined;
    }

    get(char) {
        return this.children[char];
    }

    put(char, node) {
        node.prefix = this.prefix + char;
        this.children[char] = node;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.containsKey(char)) {
                node.put(char, new TrieNode());
            }
            node = node.get(char);
        }
        node.isEnd = true;
    }

    search(word) {
        const memo = new Map();
        return backTracing(word, this.root);

        function backTracing(word, node) {
            const memoKey = word + ',' + node.prefix;
            if (memo.has(memoKey)) return memo.get(memoKey);
            const char = word[0];
            if (char == '.') {
                for (const child of Object.values(node.children)) {
                    if (backTracing(word.slice(1), child)) {
                        memo.set(memoKey, true);
                        return true;
                    }
                }
                memo.set(memoKey, false);
            }
            else {
                if (word.length == 0 && node.isEnd) {
                    memo.set(memoKey, true);
                }
                else if (!node.containsKey(char)) {
                    memo.set(memoKey, false);
                }
                else {
                    memo.set(memoKey, backTracing(word.slice(1), node.get(char)));
                }
            }
            return memo.get(memoKey);
        }
    }
}

function test1() {
    word = "word";
    var obj = new WordDictionary()
    obj.addWord(word)
    // console.log(obj.search(word));
    // console.log(obj.search('.ord'));
    obj.addWord('bat')
    // obj.addWord('add');
    console.log(obj.search(".at"));
    // console.log(obj.search("a.d"));

}

test1();

// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// ["WordDictionary","addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"]
// [[],["at"],["and"],["an"],["add"],["a"],[".at"],["bat"],[".at"],["an."],["a.d."],["b."],["a.d"],["."]]