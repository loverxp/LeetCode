// https://leetcode-cn.com/problems/concatenated-words/
var Test = require('./Common/Test');

var findAllConcatenatedWordsInADict = function (words) {
    words.sort((a, b) => a.length - b.length);
    const result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            if (backTracing(word, i)) result.push(word);
        }
    }

    return result;

    function backTracing(word, endIndex) {
        return doBackTracing(0);

        function doBackTracing(start) {
            if (start == word.length) {
                return true;
            }
            else {
                for (let i = 0; i < endIndex; i++) {
                    const anotherWord = words[i];
                    if (anotherWord != "" && anotherWord != word && word.startsWith(anotherWord, start)) {
                        if (doBackTracing(start + anotherWord.length)) return true;
                    }
                }
                return false;
            }
        }
    }
};

function test(words) {
    Test.test(findAllConcatenatedWordsInADict, words);
}

function testWithTestcase(id) {
    Test.testWithTestcase(findAllConcatenatedWordsInADict, id);
}
// test([""]);
// test(["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]);

// https://leetcode-cn.com/submissions/detail/88748444/testcase/
// testWithTestcase(88748444);
// https://leetcode-cn.com/submissions/detail/88750509/testcase/
// testWithTestcase(88750509);
// https://leetcode-cn.com/submissions/detail/88752755/testcase/
// testWithTestcase(88752755);
// https://leetcode-cn.com/submissions/detail/88754775/testcase/
// testWithTestcase(88754775);
// https://leetcode-cn.com/submissions/detail/88761915/testcase/
testWithTestcase(88761915);

// ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]
// ["cat", ""]