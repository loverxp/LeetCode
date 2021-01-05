// https://leetcode-cn.com/problems/find-longest-awesome-substring/
var Test = require('./Common/Test');

var longestAwesome = function (s) {
    const isSatisfied = (mask) => mask === 0 || Number.isInteger(Math.log2(mask));
    const n = s.length;
    for (let len = n; len > 1; len--) {
        let mask = 0;
        for (let i = 0; i < len; i++) {
            mask ^= 1 << s[i];
        }
        if (isSatisfied(mask)) return len;
        for (let i = 0; i + len < n; i++) {
            mask ^= 1 << s[i];
            mask ^= 1 << s[i + len];
            if (isSatisfied(mask)) return len;
        }
    }
    return 1;
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