// https://leetcode-cn.com/problems/super-washing-machines/
var Test = require('../Common/Test');

var findMinMoves = function (machines) {
    const n = machines.length;
    const total = machines.reduce((a, b) => a + b);
    if (total % n != 0) return -1;
    const average = total / n;

    let sum = 0;
    let moves = 0;
    for (let i = 0; i < n - 1; i++) {
        sum += machines[i];
        moves = Math.max(moves, Math.abs(sum - average * (i + 1)), machines[i] - average);
    }
    return moves;
};

function run(machines) {
    Test.run(findMinMoves, machines);
}

// 3
// run([1, 0, 5])

run([0, 3, 0])

// 1
// run([1, 2, 3])
// // 1
run([3, 0, 3])
// // 1
// run([3, 0, 3, 1, 3])
// // 3
// run([1, 0, 2, 5])
// // 5
// run([1, 0, 0, 3, 6])
// // 1
// run([4, 1, 4])