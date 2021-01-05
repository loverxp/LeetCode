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

    searchPrefix(word) {
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

    search(word) {
        const node = this.searchPrefix(word);
        return node != undefined && node.isEnd;
    };

    startsWith(prefix) {
        return this.searchPrefix(prefix) != undefined;
    };
}

exports.Trie = Trie;
exports.TrieNode = TrieNode;
