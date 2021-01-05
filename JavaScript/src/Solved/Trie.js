// https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/shi-xian-trie-qian-zhui-shu-by-leetcode/
const { Test } = require("../Common/Test");

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
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert (word) {
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

    searchPrefix (word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.containsKey(char)) {
                return undefined;
            }
            node = node.get(char);
        }
        return node;
    }

    search (word) {
        const node = this.searchPrefix(word);
        return node != undefined && node.isEnd;
    };

    startsWith (prefix) {
        return this.searchPrefix(prefix) != undefined;
    };

}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// function test() {
//     var obj = new Trie()
//     obj.insert(word)
//     var param_2 = obj.search(word)
//     var param_3 = obj.startsWith(prefix)
// }

function test1() {
    const trie = new Trie();
    trie.insert("apple");
    trie.search("apple");   // 返回 true
    trie.search("app");     // 返回 false
    trie.startsWith("app"); // 返回 true
    trie.insert("app");
    trie.search("app");
}

test1();