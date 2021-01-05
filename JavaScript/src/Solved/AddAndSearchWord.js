// https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    containsKey(char) {
        return this.children[char] != undefined;
    }

    get(char) {
        return this.children[char];
    }

    put(char, node) {
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
        return backTracing(word, this.root);

        function backTracing(word, node) {
            const char = word[0];
            if (char == '.') {
                for (const child of Object.values(node.children)) {
                    if (backTracing(word.slice(1), child))  return true; 
                }
                return false;
            }
            else {
                if (word.length == 0 && node.isEnd) return true;
                if (!node.containsKey(char)) return false;
                return backTracing(word.slice(1), node.get(char));
            }
        }
    }
}

function test1() {
    word = "word";
    var obj = new WordDictionary()
    obj.addWord(word)
    // console.log(obj.search(word));
    console.log(obj.search('.ord'));

}

test1();