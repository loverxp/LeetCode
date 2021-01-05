// https://leetcode-cn.com/problems/n-queens-ii/
var Test = require('../Common/Test');

var totalNQueens = function (n) {
    let count = 0;
    tryQueens([], 0);
    return count;

    function tryQueens(queens, layer) {
        const isBottom = layer == n - 1;
        for (let i = 0; i < n; i++) {
            const candidate = [i, layer];
            if (!queens.some(queen => isConflict(candidate, queen))) {
                queens.push([i, layer]);
                if (isBottom) {
                    count++;
                }
                else {
                    tryQueens(queens, layer + 1);
                }
                queens.pop();
            }
        }
    };
}

function isConflict([x1, y1], [x2, y2]) {
    return y1 == y2 || x1 == x2 || y1 - x1 == y2 - x2 || y1 + x1 == y2 + x2;
}

function test(n) {
    Test.test(totalNQueens, n);
}

test(4);
test(8);

// console.log(queens("a1", 1));
// console.log(queens("b4", 4));
// console.log(queens("c7", 8));
// console.log(queens("c7", 10));
// console.log(queens("c7", 16));
// console.log(queens("c7", 20));
// console.log(queens("c7", 21));
