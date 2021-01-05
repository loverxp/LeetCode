// https://leetcode-cn.com/problems/broken-board-dominoes/
var Test = require('./Common/Test');
var Matrix = require('./Common/Matrix').Matrix;

var domino = function (n, m, broken) {
    const isEven = (n * m) % 2 == 0;
    let whites = blacks = Math.trunc((n * m) / 2);
    broken.forEach(([y, x]) => {
        if (isEven || y != n - 1 || x != m - 1) {
            if ((x + y) % 2 == 1) {
                blacks--;
            }
            else {
                whites--;
            }
        }
    });

    console.log({ whites, blacks });

    return Math.min(whites, blacks);
};

function showBoard(n, m, broken) {
    console.log(broken.length);
    const a = Array(n).fill(0).map((_, i) => Array(m).fill(0).map((_, j) => (i + j) % 2));
    broken.forEach(([i, j]) => a[i][j] = '#');
    return Matrix.matrixToString(a);
}

function test(n, m, broken) {
    // const test = new Test.Test(domino, n, m, broken);
    const test = new Test.Test(showBoard, n, m, broken);
    // test.logArgs = false;
    test.do();
}

// test(2, 3, [[1, 0], [1, 1]]);
// test(3, 3, []);
test(8, 8, [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]);

// 2
// 3
// [[1, 0], [1, 1]]
// 3
// 3
// []
// 8
// 8
// [[0, 0], [0, 4], [0, 7], [1, 2], [2, 1], [2, 2], [3, 0], [3, 3], [3, 4], [4, 0], [4, 3], [4, 7], [5, 0], [5, 1], [5, 2], [5, 3], [5, 7], [6, 2], [6, 3], [6, 6], [6, 7], [7, 0], [7, 1], [7, 3], [7, 4]]