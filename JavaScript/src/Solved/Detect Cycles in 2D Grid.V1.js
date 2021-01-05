// https://leetcode-cn.com/problems/detect-cycles-in-2d-grid/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var containsCycle = function (grid) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const [m, n] = [grid.length, grid[0].length];
    const visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

    const groups = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const char = grid[i][j];
            if (!groups.has(char)) {
                groups.set(char, []);
            }
            const group = groups.get(char);
            group.push([j, i]);
        }
    }
    for (const [char, positions] of groups) {
        for (let i = 0; i < positions.length; i++) {
            const [x, y] = positions[i];
            if (!visited[y][x]) {
                if (findCycle(char, [x, y])) {
                    return true;
                }
            }
        }
    }
    return false;

    function findCycle(char, pos, prev) {
        const [x, y] = pos;
        if (visited[y][x]) {
            return true;
        }
        else {
            visited[y][x] = true;
            const [px, py] = prev ? prev : [-1, -1];
            return dirs.some(([ox, oy]) => {
                const [nx, ny] = nextPos = [x + ox, y + oy];
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[ny][nx] == char && nx != px && ny != py) {
                    return findCycle(char, nextPos, pos);
                }
                else {
                    return false;
                }
            });
        }
    }
};

function run(grid) {
    Test.run(containsCycle, grid);
}

run([["a", "a", "a", "a"], ["a", "b", "b", "a"], ["a", "b", "b", "a"], ["a", "a", "a", "a"]])
run([["c", "c", "c", "a"], ["c", "d", "c", "c"], ["c", "c", "e", "c"], ["f", "c", "c", "c"]])
run([["a", "b", "b"], ["b", "z", "b"], ["b", "b", "a"]])