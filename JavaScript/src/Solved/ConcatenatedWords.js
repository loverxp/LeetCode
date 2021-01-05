// https://leetcode-cn.com/problems/concatenated-words/
var Test = require('../Common/Test');

var findAllConcatenatedWordsInADict = function (words) {
    const result = [];
    for (const word of words) {
        if (word.length > 0) {
            if (backTracing(word, 0)) result.push(word);
        }
    }

    return result;

    function backTracing(word, start) {
        if (start == word.length) {
            return true;
        }
        else {
            for (const anotherWord of words) {
                if (anotherWord != "" && anotherWord != word && word.startsWith(anotherWord, start)) {
                    if (backTracing(word, start + anotherWord.length)) return true;
                }
            }
            return false;
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