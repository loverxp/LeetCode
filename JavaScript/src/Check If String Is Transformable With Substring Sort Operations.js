// https://leetcode-cn.com/problems/check-if-string-is-transformable-with-substring-sort-operations/
var Test = require('./Common/Test');

var isTransformable = function (s, t) {
    const n = s.length;
    const used = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        let found = false;
        for (let j = 0; j < n; j++) {
            if (!used[j]) {
                if (s[j] < t[i]) return false;
                if (s[j] == t[i]) {
                    used[j] = true;
                    found = true;
                    break;
                }
            }
        }
        if (!found) return false;
    }
    return true;
};

function run(s, t) {
    Test.run(isTransformable, s, t);
}

run("84532", "34852")
run("34521", "23415")
run("12345", "12435")
run("1", "2")