// https://leetcode-cn.com/problems/number-of-paths-with-max-score/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var pathsWithMaxScore = function (board) {
    const width = board[0].length;
    const height = board.length;
    console.log({ width, height });

    const dp = Array(height).fill(0).map(a => Array(width).fill([0, 0]));
    // const dp = Array(height).fill(0).map(a => Array(width).fill(100));
    dp[height - 1][width - 1] = [0, 1];
    // console.log(dp);
    // return;


    const offsets = [[-1, 0], [0, -1], [-1, -1]];
    const queue = [[width - 1, height - 1]];

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        const [prevMax, prevCount] = dp[y][x];

        for (const [offsetX, offsetY] of offsets) {
            const xy = [x + offsetX, y + offsetY];
            const [nx, ny] = xy;
            console.log(xy);
            

            if (nx >= 0 && ny >= 0 && board[ny][nx] != 'X') {
                let [max, count] = dp[ny][nx];
                newMax = prevMax + (nx == 0 && ny == 0) ? 0 : Number(board[ny][nx]);
                switch (true) {
                    case newMax == max:
                        dp[ny][nx][1] = count + prevCount;
                        break;
                    case newMax > max:
                        dp[ny][nx] = [newMax, prevCount];
                        break;
                }
                queue.push(xy);
            }
        }
    }
    console.log(dp);


    return dp[0][0];
};

function test(board) {
    Matrix.logMatrixInString(board);
    Test.test(pathsWithMaxScore, board);
}

test(["E23", "2X2", "12S"]);
// test(["E12", "1X1", "21S"]);
// test(["E11", "XXX", "11S"]);

// ["E23", "2X2", "12S"]
// ["E12", "1X1", "21S"]
// ["E11", "XXX", "11S"]