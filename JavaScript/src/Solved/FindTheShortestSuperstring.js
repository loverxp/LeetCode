// https://leetcode-cn.com/problems/find-the-shortest-superstring/
var Test = require('./Common/Test');
var { Trie, TrieNode } = require('./Common/Trie');

var shortestSuperstring = function (strs) {
    const n = strs.length;
    // const trie = new Trie(strs);

    // const dp = Array.from({ length: n }, () => Array.from({ length: 2 ** n }, () => ""));

    return dfs("", 0);

    function dfs(str, used) {
        if (used + 1 == 1 << n) {
            return str;
        }
        else {
            let shortest;
            for (let i = 0; i < n; i++) {
                // if (used ^ (1 << i)) {
                if (!(used & (1 << i))) {
                    const str2 = dfs(concat(str, strs[i]), used ^ (1 << i));
                    if (!shortest || str2.length < shortest.length) {
                        shortest = str2;
                    }
                }
            }
            return shortest;
        }
    }

    function concat(str1, str2) {
        // return "";
        for (let i = 0; i < str1.length; i++) {
            // const element = array[i];
            if (str2.startsWith(str1.slice(i))) {
                return str1.slice(0, i) + str2;
            }
        }
        return str1 + str2;
    }
};

function run(strs) {
    Test.run(shortestSuperstring, strs);
}

// run(["alex", "loves", "leetcode"]);
run(["catg", "ctaagt", "gcta", "ttca", "atgcatc"]);

// run(["ab", "a", "b", "abc"]);
// run(["ab", "a", "b", "abc"]);
