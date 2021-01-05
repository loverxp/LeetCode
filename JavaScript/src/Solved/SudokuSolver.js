// https://leetcode-cn.com/problems/sudoku-solver/

var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var solveSudoku = function (board) {
    const rows = Array(9).fill(0).map(_ => Array(9).fill(false));
    const columns = Array(9).fill(0).map(_ => Array(9).fill(false));
    const boxes = Array(3).fill(0).map(_ => Array(3).fill(0).map(_ => Array(9).fill(false)));

    prepare();
    fillNums(0, 0);
    return board;

    function prepare() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = board[i][j];
                if (num != '.') {
                    setStatus(j, i, num, true);
                }
            }
        }
    }

    function fillNums(x, y) {
        if (board[y][x] == '.') {
            let result = false;
            for (let i = 0; i < 9; i++) {
                const num = i + 1;
                if (isNumAvailable(x, y, num)) {
                    board[y][x] = num.toString();
                    setStatus(x, y, num, true);
                    result = tryNext();
                    if (!result) {
                        setStatus(x, y, num, false);
                        board[y][x] = '.';
                    }
                }
            }
            return result;
        }
        else {
            return tryNext();
        }

        function tryNext() {
            const [nextX, nextY] = x != 9 ? [x + 1, y] : [0, y + 1];
            return nextY > 8 ? true : fillNums(nextX, nextY);
        }
    }

    function isNumAvailable(x, y, num) {
        const i = num - 1;
        return !rows[y][i] && !columns[x][i] && !boxes[Math.trunc(y / 3)][Math.trunc(x / 3)][i];
    }

    function setStatus(x, y, num, status) {
        const i = num - 1;
        rows[y][i] = status;
        columns[x][i] = status;
        y = Math.trunc(y / 3);
        x = Math.trunc(x / 3);
        boxes[y][x][i] = status;
    }

};

function test(board) {
    Matrix.logMatrixInArray(board);
    const test = new Test.Test(solveSudoku, board);
    test.logArgs = false;
    test.resultLogger = function (board) {
        Matrix.logMatrixInArray(board);
    }
    test.do();
}

function test1(board) {
    board = board.map(a => a.split(''));
    test(board);
}

input1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

input2 = [
    ".........",
    ".........",
    ".........",
    ".........",
    ".........",
    ".........",
    ".........",
    ".........",
    "........."];


input3 = [
    "69...2..1",
    "83..57...",
    ".5.19.34.",
    "4.7.1...9",
    "2.597.8.6",
    ".8.2657..",
    "...63.42.",
    "32.5..98.",
    ".49......"];

input4 = [
    ".9..1.246",
    "4........",
    "..3....9.",
    "....8.4..",
    "...93..75",
    "...2...38",
    "...14...2",
    "541.....9",
    "6.2359..."];


// test(input1);

// test1(input2);
// test1(input3);
test1(input4);