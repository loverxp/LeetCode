// https://leetcode-cn.com/problems/find-the-shortest-superstring/
var Test = require('./Common/Test');
var { Trie, TrieNode } = require('./Common/Trie');

var shortestSuperstring = function (strs) {
    const n = strs.length;
    const overlaps = calcOverlaps();
    const dp = Array.from({ length: 2 ** n }, () => Array.from({ length: n }));
    let states = new Set();
    for (let i = 0; i < n; i++) {
        dp[1 << i][i] = strs[i];
        states.add([1 << i]);
    }

    while (states.size) {
        const states2 = new Set();
        for (const mask of states) {
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    for (let j = 0; j < n; j++) {
                        if (!(mask & (1 << j))) {
                            const mask2 = mask ^ (1 << j);
                            const overlap = overlaps[i][j];
                            if (!dp[mask2][j] || dp[mask][i].length + strs[j].length - overlap < dp[mask2][j].length) {
                                dp[mask2][j] = dp[mask][i] + strs[j].slice(overlap);
                                states2.add(mask2);
                            }
                        }
                    }
                }
            }
        }
        states = states2;
    }


    return dp[2 ** n - 1].reduce((str1, str2) => str1.length < str2.length ? str1 : str2);

    function calcOverlaps() {
        const overlaps = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    overlaps[i][j] = overlapBetween(strs[i], strs[j]);
                }
            }
        }
        return overlaps;

        function overlapBetween(str1, str2) {
            for (let i = 0; i < str1.length; i++) {
                if (str2.startsWith(str1.slice(i))) {
                    return str1.length - i;
                }
            }
            return 0;
        }
    }
};

function run(strs) {
    Test.run(shortestSuperstring, strs);
}

run(["alex", "loves", "leetcode"]);
run(["catg", "ctaagt", "gcta", "ttca", "atgcatc"]);

// run(["ab", "a", "b", "abc"]);
// run(["ab", "a", "b", "abc"]);
