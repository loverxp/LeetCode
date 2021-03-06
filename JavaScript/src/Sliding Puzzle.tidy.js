// https://leetcode-cn.com/problems/sliding-puzzle/
var Test = require('./Common/Test');

var slidingPuzzle = function (board) {
    return bfs(board.flat().join(''));

    function bfs(code) {
        const target = "123450";
        const visited = new Set([code]);
        let states = new Set(visited);
        let steps = 0;
        while (states.size) {
            const states2 = new Set();
            for (const code of states) {
                if (code == target) {
                    return steps;
                }
                else {
                    for (const next of getNexts(code)) {
                        if (!visited.has(next)) {
                            visited.add(next);
                            states2.add(next);
                        }
                    }
                }
            }
            steps++;
            states = states2
        }
        return -1;
    }

    function getNexts(code) {
        const arr = code.split('').map(n => parseInt(n));
        const transits = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
        const index = arr.indexOf(0);
        const nexts = [];
        for (const i of transits[index]) {
            const arr2 = arr.slice();
            arr2[index] ^= arr2[i];
            arr2[i] ^= arr2[index];
            arr2[index] ^= arr2[i];
            nexts.push(arr2.join(''));
        }
        return nexts;
    }
};

function logStates(states) {
    for (const code of states) {
        logCode(code);
    }
}

function logCode(code) {
    var { Matrix } = require('./Common/Matrix');
    const board = [code.slice(0, 3).split(''), code.slice(3, 6).split('')];
    Matrix.logMatrixInArray(board);
}

function run(board) {
    Test.run(slidingPuzzle, board);
}

// run([[1, 2, 3], [4, 0, 5]])
// run([[1, 2, 3], [5, 4, 0]])
// run([[4, 1, 2], [5, 0, 3]])
run([[3, 2, 4], [1, 5, 0]])
