// https://leetcode-cn.com/problems/verbal-arithmetic-puzzle/
var Test = require('./Common/Test');

var isSolvable = function (words, result) {
    const codeMap = new Map();
    const codeSet = initCharSet();
    const codes = [...codeSet];
    const used = new Set();

    return backTracing();

    function backTracing() {
        if (codes.length == 0) {
            return judgeEquation();
        }
        else {
            const char = codes.pop();
            for (let i = 0; i < 10; i++) {
                if (!used.has(i)) {
                    codeMap.set(char, i);
                    used.add(i);
                    if (backTracing()) return true;
                    used.delete(i);
                }
            }
            codes.push(char);
            return false;
        }
    }

    function initCharSet() {
        const codeSet = new Set();
        for (const word of words) {
            for (const char of word) {
                codeSet.add(char);
            }
        }
        for (const char of result) {
            codeSet.add(char);
        }
        return codeSet;
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

// test(["SEND", "MORE"], "MONEY");
// test(["SIX", "SEVEN", "SEVEN"], "TWENTY");
// test(["THIS", "IS", "TOO"], "FUNNY");
// test(["LEET", "CODE"], "POINT");
// test(["THAT", "IS", "WHY", "IT", "IS"], "FALSE");

// ["SEND","MORE"]
// "MONEY"
// ["SIX","SEVEN","SEVEN"]
// "TWENTY"
// ["THIS","IS","TOO"]
// "FUNNY"
// ["LEET","CODE"]
// "POINT"