// https://leetcode-cn.com/problems/find-longest-awesome-substring/
var Test = require('../Common/Test');

var longestAwesome = function (s) {
    const n = s.length;
    const counter = [-1];
    let result = 0;
    let mask = 0;
    for (let i = 0; i < n; i++) {
        mask ^= 1 << s[i];
        if (counter[mask] != undefined) {
            result = Math.max(result, i - counter[mask]);
        }
        else {
            counter[mask] = i;
        }
        for (let j = 0; j < 10; j++) {
            const mask2 = mask ^ (1 << j);
            if (counter[mask2] != undefined) {
                result = Math.max(result, i - counter[mask2]);
            }
        }
    }
    return result;
};

function run(s) {
    Test.run(longestAwesome, s);
}

function testWithTestcase(id) {
    Test.testWithTestcase(longestAwesome, id);
}

// run("3242415")
// run("12345678")
// run("213123")
// run("2173123")
// run("00")

testWithTestcase(104903273);