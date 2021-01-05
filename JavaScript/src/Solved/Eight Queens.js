// https://leetcode-cn.com/problems/n-queens/
var Test = require('../Common/Test');

var solveNQueens = function (n) {
    const result = [];
    tryQueens([], 0);
    return result;

    function tryQueens(queens, layer) {
        const isBottom = layer == n - 1;
        for (let i = 0; i < n; i++) {
            if (!queens.some(queen => isConflict([i, layer], queen))) {
                queens.push([i, layer]);
                if (isBottom) {
                    result.push(makeResult(queens));
                }
                else {
                    tryQueens(queens, layer + 1);
                }
                queens.pop();
            }
        }
    };

    function isConflict([x1, y1], [x2, y2]) {
        return y1 == y2 || x1 == x2 || y1 - x1 == y2 - x2 || y1 + x1 == y2 + x2;
    }

    function makeResult(queens) {
        const chessBoard = Array(n).fill(0).map(a => Array(n).fill('.'));
        for (const [x, y] of queens) {
            chessBoard[x][y] = 'Q';
        }
        return chessBoard.map(row => row.join(''));
    }
}

function test(n) {
    Test.test(solveNQueens, n);
}

// test(4);
test(8);

// console.log(queens("a1", 1));
// console.log(queens("b4", 4));
// console.log(queens("c7", 8));
// console.log(queens("c7", 10));
// console.log(queens("c7", 16));
// console.log(queens("c7", 20));
// console.log(queens("c7", 21));
