// https://leetcode-cn.com/problems/friend-circles/
var Test = require('./Common/Test');

var findCircleNum = function (M) {
    const n = M.length;
    const sets = Array(n).fill();
    for (let i = 0; i < n - 1; i++) {
        let s1 = i;
        while (sets[s1] != undefined) s1 = sets[s1];
        for (let j = i + 1; j < n; j++) {
            if (M[i][j] == 1) {
                let s2 = j;
                while (sets[s2] != undefined) s2 = sets[s2];
                if (s1 != s2) sets[s2] = s1;
            }
        }
    }
    return sets.filter(a => a == undefined).length;
};

function run(M) {
    Test.run(findCircleNum, M);
}


run([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
run([[1, 1, 0], [1, 1, 1], [0, 1, 1]]);
run([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]);