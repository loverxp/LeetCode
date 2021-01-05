// https://leetcode-cn.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var shortestPath = function (grid, k) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const height = grid.length;
    const width = grid[0].length;
    const dp = Array(height).fill().map(_ => Array(width).fill().map(_ => Array(k + 1).fill(Infinity)));
    dp[0][0][0] = 0;
    const queue = [[0, 0]];
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        const status = dp[y][x];

        for (const [offsetX, offsetY] of directions) {
            const nextXY = [x + offsetX, y + offsetY];
            const [nextX, nextY] = nextXY;

            if (nextX >= 0 && nextY >= 0 && nextX < width && nextY < height) {
                const nextStatus = dp[nextY][nextX];
                const isObstacle = grid[nextY][nextX] == 1;

                let available = false;
                if (!isObstacle) {
                    for (let i = 0; i < k + 1; i++) {
                        const nextStep = status[i] + 1;
                        if (nextStep < nextStatus[i]) {
                            nextStatus[i] = nextStep;
                            available = true;
                        }
                    }
                }
                else {
                    for (let i = 0; i < k; i++) {
                        const nextStep = status[i] + 1;
                        if (nextStep < nextStatus[i + 1]) {
                            nextStatus[i + 1] = nextStep;
                            available = true;
                        }
                    }
                }
                if (available) queue.push(nextXY);
            }
        }
    }
    let totalSteps = Math.min(...dp[height - 1][width - 1]);
    return totalSteps == Infinity ? -1 : totalSteps;
};

function test(grid, k) {
    Matrix.logMatrixInArray(grid);
    Test.test(shortestPath, grid, k);
}

test([[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1);
test([[0, 1, 1], [1, 1, 1], [1, 0, 0]], 1);
test([[0, 1, 1], [1, 1, 1], [1, 0, 0]], 2);