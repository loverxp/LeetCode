// https://leetcode-cn.com/problems/word-search/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var exist = function (board, word) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    return board.some((row, i) => row.some((_, j) => search([j, i], 0, new Set())));

    function search([x, y], index, visitedSet) {
        if (x >= 0 && x < board[0].length && y >= 0 && y < board.length) {
            const key = `${x},${y}`;
            if (!visitedSet.has(key) && word[index] == board[y][x]) {
                if (++index < word.length) {
                    visitedSet.add(key);
                    let searchResult = dirs.some(([offsetX, offsetY]) => search([x + offsetX, y + offsetY], index, visitedSet));
                    visitedSet.delete(key);
                    return searchResult;
                }
                else {
                    return true;
                }
            }
        }
        return false;
    }
};

function test(board, word) {
    Matrix.logMatrixInArray(board);
    Test.test(exist, board, word);
}

board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

test(board, "ABCCED");
test(board, "SEE");
test(board, "ABCB");