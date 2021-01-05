// https://leetcode-cn.com/problems/verbal-arithmetic-puzzle/
var Test = require('./Common/Test');

var isSolvable = function (words, result) {
    const codeMap = new Map();

    const codeSet = new Set();
    // const numSet = new Set();
    // const numMap = new Map();

    for (const word of words) {
        for (const char of word) {
            codeSet.add(char);
        }
    }
    for (const char of result) {
        codeSet.add(char);
    }
    const codes = [...codeSet];

    // for (let i = 0; i < 10; i++) {
    //     numSet.add(i);
    // }

    const used = new Set();

    return backTracing();

    // for (const char of codeSet) {

    // }



    function backTracing() {
        // if (codeSet.size == codeMap.size) {
        // if (codeSet.size == 0) {
        if (codes.length == 0) {
            return judgeEquation();
        }
        else {
            const char = codes.pop();
            // for (const num of numSet) {

            // }
            for (let i = 0; i < 10; i++) {
                if (!used.has(i)) {
                    codeMap.set(char, i);
                    used.add(i);
                    if (backTracing()) return true;
                    // codeMap.delete(char);   //??
                    used.delete(i);
                }
            }
            codes.push(char);               //??
            return false;
        }
    }

    function decodeWord(word) {
        let decoded = "";
        for (const char of word) {
            decoded += codeMap.get(char);
        }
        return Number(decoded);
    }

    function judgeEquation() {
        return decodeWord(result) == words.reduce((sum, word) => sum + decodeWord(word), 0);
    }
};

function test(words, result) {
    Test.test(isSolvable, words, result);
}

test(["SEND", "MORE"], "MONEY");
test(["SIX", "SEVEN", "SEVEN"], "TWENTY");
test(["THIS", "IS", "TOO"], "FUNNY");
test(["LEET", "CODE"], "POINT");