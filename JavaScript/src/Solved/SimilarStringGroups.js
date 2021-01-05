// https://leetcode-cn.com/problems/similar-string-groups/
var Test = require('../Common/Test');

var numSimilarGroups = function (strings) {
    const similars = new Map();
    for (let i = 0; i < strings.length; i++) {
        const word1 = strings[i];
        if (!similars.has(word1)) {
            similars.set(word1, []);
        }
        for (let j = i + 1; j < strings.length; j++) {
            const word2 = strings[j];

            if (isSimilar(word1, word2)) {
                similars.get(word1).push(word2);
                if (!similars.has(word2)) {
                    similars.set(word2, [word1]);
                }
                else {
                    similars.get(word2).push(word1);
                }
            }
        }
    }

    let result = 0;

    while (similars.size > 0) {
        const queue = [similars.keys().next().value];
        const collection = new Set();
        while (queue.length > 0) {
            const word = queue.shift();
            if (!collection.has(word)) {    //??
                collection.add(word);
                for (const w of similars.get(word)) {
                    if (!collection.has(w)) {
                        queue.push(w);
                    }
                }
            }
            similars.delete(word);
        }
        result++;
    }

    return result;

    function isSimilar(word1, word2) {
        const length = word1.length;
        let exchanged = false;
        let exchangedIndex;
        for (let i = 0; i < length; i++) {
            if (word1[i] != word2[i]) {
                if (!exchanged) {
                    for (let j = i + 1; j < length; j++) {
                        if (word1[i] == word2[j] && word1[j] == word2[i]) {
                            exchangedIndex = j;
                            break;
                        }
                    }
                    exchanged = true;
                }
                else {
                    if (i != exchangedIndex) return false;
                }
            }
        }
        return true;
    }
};

function test(strings) {
    Test.test(numSimilarGroups, strings);
}

// test(["tars", "rats", "arts", "star"]);
test(["qihcochwmglyiggvsqqfgjjxu", "gcgqxiysqfqugmjgwclhjhovi", "gjhoggxvcqlcsyifmqgqujwhi", "wqoijxciuqlyghcvjhgsqfmgg", "qshcoghwmglygqgviiqfjcjxu", "jgcxqfqhuyimjglgihvcqsgow", "qshcoghwmggylqgviiqfjcjxu", "wcoijxqiuqlyghcvjhgsqgmgf", "qshcoghwmglyiqgvigqfjcjxu", "qgsjggjuiyihlqcxfovchqmwg", "wcoijxjiuqlyghcvqhgsqgmgf", "sijgumvhqwqioclcggxgyhfjq", "lhogcgfqqihjuqsyicxgwmvgj", "ijhoggxvcqlcsygfmqgqujwhi", "qshcojhwmglyiqgvigqfgcjxu", "wcoijxqiuqlyghcvjhgsqfmgg", "qshcojhwmglyiggviqqfgcjxu", "lhogcgqqfihjuqsyicxgwmvgj", "xscjjyfiuglqigmgqwqghcvho", "lhggcgfqqihjuqsyicxgwmvoj", "lhgocgfqqihjuqsyicxgwmvgj", "qihcojhwmglyiggvsqqfgcjxu", "ojjycmqshgglwicfqguxvihgq", "sijvumghqwqioclcggxgyhfjq", "gglhhifwvqgqcoyumcgjjisqx"]);
// test(["lhgocgfqqihjuqsyicxgwmvgj", "lhgocgfqqihjuqsyicxgwmvgj"]);