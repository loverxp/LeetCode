// https://leetcode-cn.com/problems/palindrome-pairs/
var Test = require('../Common/Test');

var palindromePairs = function (words) {
    const result = [];
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        for (let j = i + 1; j < words.length; j++) {
            const word2 = words[j];
            if (isPalindrome(word1 + word2)) result.push([i, j]);
            if (isPalindrome(word2 + word1)) result.push([j, i]);
        }
    }
    return result;

    function isPalindrome(word) {
        for (let i = 0; i < Math.ceil(word.length / 2); i++) {
            if (word[i] != word[word.length - i - 1]) return false;
        }
        return true;
    }
};

function test(words) {
    Test.test(palindromePairs, words);
}

test(["abcd", "dcba", "lls", "s", "sssll"]);
test(["bat", "tab", "cat"]);