// https://leetcode-cn.com/problems/longest-chunked-palindrome-decomposition/
var Test = require('../Common/Test');

var longestDecomposition = function (text) {
    let count = 0;
    let start = 0;
    for (let i = 1; i <= text.length; i++) {
        if (match(start, i)) {
            count++;
            start = i;
        }
    }
    return count;

    function match(start, end) {
        for (let i = start, j = text.length - end; i < end; i++, j++) {
            if (text[i] != text[j]) return false;
        }
        return true;
    }
};

function test(text) {
    Test.test(longestDecomposition, text);
}

test("ghiabcdefhelloadamhelloabcdefghi");
test("merchant");
test("antaprezatepzapreanta");
test("aaa");