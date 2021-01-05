// https://leetcode-cn.com/problems/last-substring-in-lexicographical-order/
var Test = require('../Common/Test');

var lastSubstring = function (s) {
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i].localeCompare(s[index])) {
            case 1:
                index = i;
                break;
            case 0:
                if(s.slice(i).localeCompare(s.slice(index)) > 0){
                    index = i;
                }
                break;
        }
        // if (s[i].localeCompare(s[index]) > 0) {
        //     index = i;
        // }
    }
    return s.slice(index);
};

function test(s) {
    Test.test(lastSubstring, s);
}

// test("abab");
// test("leetcode");
// test("cacacb");