// https://leetcode-cn.com/problems/find-all-good-strings/
var Test = require('./Common/Test');

var findGoodStrings = function (n, s1, s2, evil) {

};

function run(n, s1, s2, evil) {
    Test.run(findGoodStrings, n, s1, s2, evil);
}

// run(2, "aa", "da", "b")
run(8, "leetcode", "leetgoes", "leet")
// run(2, "gx", "gz", "x")