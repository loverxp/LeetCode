// https://leetcode-cn.com/problems/broken-board-dominoes/
var Test = require('./Common/Test');
var Matrix = require('./Common/Matrix').Matrix;

var domino = function (n, m, broken) {

    // const offsets = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const offsets = [[1, 0], [0, 1]];
    // const offsets = [[-1, 0], [0, -1], [1, 0], [0, 1], [0, 0]];
    // const board = Array(n).fill().map((_, i) => Array(m).fill());
    // const board = Array(n).fill().map((_, i) => Array(m).fill('.'));
    const board = Array.from({ length: m }, () => Array.from({ length: n }));

    // broken.forEach(([i, j]) => board[i][j] = '#');
    broken.forEach(([i, j]) => { if (i < n && j < m) board[i][j] = '#' });

    // Matrix.logMatrixInArray(board);
    // console.log(board);

    // return;

    // const occupied = new Set(broken.map());
    // 
    // const states = new Set();
    let states = [[0, new Set()]];
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            `${x},${y}`;
            if (board[y][x] == '#') {
                for (const [_, occupied] of states) {
                    // occupied.add(`${x},${y}`);
                    occupied.add();
                }
            }
            else {
                const states2 = [];
                // const states2 = states.slice();
                for (const [count, occupied] of object) {

                }
            }
        }
    }
};

function showBoard(n, m, broken) {
    console.log("broken length:", broken.length);
    // const board = Array(n).fill().map((_, i) => Array(m).fill().map((_, j) => (i + j) % 2));
    const board = Array(n).fill().map((_, i) => Array(m).fill('.'));
    // broken.forEach(([i, j]) => board[i][j] = '#');
    broken.forEach(([i, j]) => { if (i < n && j < m) board[i][j] = '#' });
    // return Matrix.matrixToString(a);
    // Matrix.logMatrixInString(board);
    Matrix.logMatrixInArray(board);
}

function test(n, m, broken) {
    showBoard(n, m, broken);
    Test.test(domino, n, m, broken);
    // Test.repeatTest(1000, domino, n, m, broken);
    // const test = new Test.Test(domino, n, m, broken);
    // const test = new Test.Test(showBoard, n, m, broken);
    // test.logArgs = false;
    // test.do();
}

// function repeatTest(n, m, broken) {
// Test.repeatTest(1000, domino, n, m, broken);
// }

// test(2, 3, [[1, 0], [1, 1]]);
// test(3, 3, []);
// test(4, 4, [[0, 0], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3]]);
test(5, 5, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);
// test(4, 4, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);
// test(8, 8, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);

// 2
// 3
// [[1, 0], [1, 1]]
// 3
// 3
// []
// 8
// 8
// [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]