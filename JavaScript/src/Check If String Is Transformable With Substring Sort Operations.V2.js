// https://leetcode-cn.com/problems/check-if-string-is-transformable-with-substring-sort-operations/
var Test = require('./Common/Test');

var isTransformable = function (s, t) {
    const n = s.length;
    const indices = Array.from({ length: 10 }, () => []);
    for (let i = n - 1; i >= 0; i--) {
        indices[parseInt(s[i])].push(i);
    }

    for (let i = 0; i < n; i++) {
        const num = parseInt(t[i]);
        if (indices[num].length) {
            const index = indices[num].pop();
            for (let i = 0; i < num; i++) {
                if (indices[i].length && indices[i][indices[i].length-1] < index) {
                    return false;
                }
            }
        }
        else {
            return false;
        }
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