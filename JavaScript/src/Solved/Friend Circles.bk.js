// https://leetcode-cn.com/problems/friend-circles/
var Test = require('./Common/Test');

var findCircleNum = function (M) {
    const n = M.length;
    const sets = Array(n).fill();
    for (let i = 0; i < n - 1; i++) {
        let set1 = i;
        while (sets[set1] != undefined) set1 = sets[set1];
        console.log();
        console.log({ k: set1 });
        console.log({ set: sets });
        console.log(sets[set1]);
        for (let j = i + 1; j < n; j++) {
            if (M[i][j] == 1) {
                // set[j] = i;
                let set2 = j;
                while (sets[set2] != undefined) set2 = sets[set2];
                sets[set2] = set1;
            }
        }
    }
    console.log({ set: sets });
    return sets.filter(a => a == undefined).length;
};

function run(M) {
    Test.run(findCircleNum, M);
}


run([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
run([[1, 1, 0], [1, 1, 1], [0, 1, 1]]);
run([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]);