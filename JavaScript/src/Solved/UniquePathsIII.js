// https://leetcode-cn.com/problems/unique-paths-iii/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var uniquePathsIII = function (grid) {
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const [width, height] = [grid[0].length, grid.length];
    const path = new Map();
    let start, target;
    let steps = 0;
    let count = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const type = grid[i][j];
            if (type != -1) {
                const key = makeKey(j, i);
                const xy = [j, i];
                path.set(key, false);
                switch (type) {
                    case 1: start = xy; break;
                    case 2: target = xy; break;
                }
            }
        }
    }
    dfs(start, steps);
    return count;

    function dfs(xy, steps) {
        const [x, y] = xy;
        if (x >= 0 && x < width && y >= 0 && y < height) {
            if (grid[y][x] != -1) {
                if (x == target[0] && y == target[1]) {
                    if (++steps == path.size) {
                        count++;
                    }
                }
                else {
                    const key = makeKey(x, y);
                    if (!path.get(key)) {
                        path.set(key, true);
                        for (const [ox, oy] of dirs) {
                            dfs([x + ox, y + oy], steps + 1);
                        }
                        path.set(key, false);
                    }
                }
            }
        }
    }

    function makeKey(x, y) {
        return `${x},${y}`;
    }
};

function test(grid) {
    Matrix.logMatrixInArray(grid);
    Test.test(uniquePathsIII, grid);
}

test([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]]);
test([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]]);
test([[0, 1], [2, 0]]);