// https://leetcode-cn.com/problems/making-a-large-island/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var largestIsland = function (grid) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const [width, height] = [grid[0].length, grid.length];

    const islands = {};
    let color = 1;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const block = grid[i][j];
            if (block == 1) {
                dye([j, i], ++color);
            }
        }
    }

    let maxArea = Math.max(...Object.values(islands));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const block = grid[i][j];
            if (block == 0) {
                let area = 1;
                const existColors = new Set();
                for (const [ox, oy] of dirs) {
                    const [x, y] = [j + ox, i + oy];
                    if (x >= 0 && x < width && y >= 0 && y < height && grid[y][x] != 0) {
                        const color = grid[y][x];
                        if (!existColors.has(color)) {
                            existColors.add(color);
                            area += islands[color];
                        }
                    }
                }
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;

    function dye([x, y], color) {
        if (x >= 0 && x < width && y >= 0 && y < height && grid[y][x] == 1) {
            grid[y][x] = color;
            if (!(color in islands)) {
                islands[color] = 0;
            }
            islands[color]++;
            for (const [ox, oy] of dirs) {
                dye([x + ox, y + oy], color);
            }
        }
    }
};

function test(grid) {
    Matrix.logMatrixInArray(grid);
    Test.test(largestIsland, grid);
}

test([[1, 0], [0, 1]])
test([[1, 1], [1, 0]])
test([[1, 1], [1, 1]])
test([[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]);