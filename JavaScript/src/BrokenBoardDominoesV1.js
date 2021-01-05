// https://leetcode-cn.com/problems/broken-board-dominoes/
var Test = require('./Common/Test');
var Matrix = require('./Common/Matrix').Matrix;

var domino = function (n, m, broken) {

    const offsets = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    // const offsets = [[1, 0], [0, 1]];
    // const offsets = [[-1, 0], [0, -1], [1, 0], [0, 1], [0, 0]];
    // for (let y = 0; y < n; y += 2) {
    // for (let x = 0; x < m; x += 2) {


    // }
    // }

    // const board = Array(n).fill().map((_, i) => Array(m).fill());
    const board = Array(n).fill().map((_, i) => Array(m).fill('.'));
    // broken.forEach(([i, j]) => board[i][j] = '#');
    broken.forEach(([i, j]) => { if (i < n && j < m) board[i][j] = '#' });

    Matrix.logMatrixInArray(board);
    // console.log(board);

    let max = 0;
    backtracking(0, 0, 0);
    return max;

    function backtracking(x, y, count) {
        if (y >= n) {
            max = Math.max(max, count);
        }
        else {

            // if (condition) {

            // }
            // board[y][x] = '#';
            // const [nx, ny] = x + 2 < m ? [x + 2, y] : [0, y + 2];
            const [nx, ny] = x + 2 < m ? [x + 2, y] : [y % 2 == 1 ? 0 : 1, y + 1];
            // console.log({ nx, ny });
            // const [nx, ny] = x + 1 < m ? [x + 1, y] : [0, y + 1];
            const tryNext = (inc) => backtracking(nx, ny, count + (inc ? 1 : 0));
            if (board[y][x] != '#') {
                // board[y][x] = '#';
                // board[y][x] = '#';
                for (const [ox, oy] of offsets) {
                    const [bx, by] = [x + ox, y + oy];
                    if (bx >= 0 && bx < m && by >= 0 && by < n) {
                        if (board[by][bx] != '#') {
                            board[by][bx] = '#';
                            tryNext(true);
                            board[by][bx] = '.';
                        }
                        // else {

                        // }
                    }
                }
                // board[y][x] = '.';
            }
            tryNext(false);
        }
    }
};

function showBoard(n, m, broken) {
    console.log(broken.length);
    const board = Array(n).fill().map((_, i) => Array(m).fill().map((_, j) => (i + j) % 2));
    broken.forEach(([i, j]) => board[i][j] = '#');
    // return Matrix.matrixToString(a);
    // Matrix.logMatrixInString(board);
    Matrix.logMatrixInArray(board);
}

function test(n, m, broken) {
    showBoard(n, m, broken);
    const test = new Test.Test(domino, n, m, broken);
    // const test = new Test.Test(showBoard, n, m, broken);
    // test.logArgs = false;
    test.do();
}

// test(2, 3, [[1, 0], [1, 1]]);
// test(3, 3, []);
test(8, 8, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);
// test(4, 4, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);
// test(4, 4, [[0, 0], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3]]);

// 2
// 3
// [[1, 0], [1, 1]]
// 3
// 3
// []
// 8
// 8
// [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]