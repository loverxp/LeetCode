// https://leetcode-cn.com/problems/number-of-paths-with-max-score/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var pathsWithMaxScore = function (board) {
    const mod = 1000000007;
    const offsets = [[1, 0], [0, 1], [1, 1]];
    const width = board[0].length;
    const height = board.length;

    const dp = Array(height).fill(0).map(a => Array(width).fill([0, 0]));
    dp[height - 1][width - 1] = [0, 1];

    for (let y = height - 1; y >= 0; y--) {
        for (let x = width - 1; x >= 0; x--) {
            if ((x < width - 1 || y < height - 1) && board[y][x] != 'X') {
                let count = 0;
                let max = 0;
                for (let i = 0; i < offsets.length; i++) {
                    const [ox, oy] = offsets[i];
                    const [px, py] = [x + ox, y + oy];
                    if (px < width && py < height) {
                        const [pMax, pCount] = dp[py][px];
                        if (pMax > max) {
                            max = pMax;
                            count = pCount;
                        }
                        else if (pMax == max) {
                            count += pCount;
                        }
                    }
                }
                if (count > 0) {
                    if (x > 0 || y > 0) max += Number(board[y][x]);
                    dp[y][x] = [max % mod, count % mod];
                }
            }
        }
    }
    return dp[0][0];
};

function test(board) {
    Matrix.logMatrixInString(board);
    Test.test(pathsWithMaxScore, board);
}

// test(["E23", "2X2", "12S"]);
// test(["E12", "1X1", "21S"]);
// test(["E11", "XXX", "11S"]);

// https://leetcode-cn.com/submissions/detail/85166979/testcase/


// ["E23", "2X2", "12S"]
// ["E12", "1X1", "21S"]
// ["E11", "XXX", "11S"]