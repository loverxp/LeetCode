// https://leetcode-cn.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var minCost = function (grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    const m = grid.length;
    const n = grid[0].length;
    const queue = [[0, 0]];
    const offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const costs = Array(m).fill(0).map(a => Array(n).fill(Number.MAX_SAFE_INTEGER));

    costs[0][0] = 0;

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        const d = grid[y][x];
        const cost = costs[y][x];

        offsets.forEach(([offsetX, offsetY], i) => {
            const [nextX, nextY] = [x + offsetX, y + offsetY];
            if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
                const noNeedChange = i + 1 == d;
                const nextCost = noNeedChange ? cost : cost + 1;
                if (costs[nextY][nextX] > nextCost) {
                    costs[nextY][nextX] = nextCost;
                    if (noNeedChange) {
                        queue.unshift([nextX, nextY]);
                    }
                    else {
                        queue.push([nextX, nextY]);
                    }
                }
            }

        });
    }
    return costs[m - 1][n - 1];
};

function test(grid) {
    Matrix.logMatrixInArray(grid);
    const test = new Test.Test(minCost, grid);
    // test.resultLogger = function (matrix) {
    // Matrix.logMatrixInArray(matrix);
    // }
    test.do();
}

test([[1, 1, 1, 1], [2, 2, 2, 2], [1, 1, 1, 1], [2, 2, 2, 2]]);
test([[1, 1, 3], [3, 2, 2], [1, 1, 4]]);
test([[1, 2], [4, 3]]);
test([[2, 2, 2], [2, 2, 2]]);
test([[4]]);

// [[1, 1, 1, 1], [2, 2, 2, 2], [1, 1, 1, 1], [2, 2, 2, 2]]
// [[1, 1, 3], [3, 2, 2], [1, 1, 4]]
// [[1, 2], [4, 3]]
// [[2, 2, 2], [2, 2, 2]]
// [[4]]

