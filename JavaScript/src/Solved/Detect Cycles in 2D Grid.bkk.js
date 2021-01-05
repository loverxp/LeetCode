// https://leetcode-cn.com/problems/detect-cycles-in-2d-grid/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var containsCycle = function (grid) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const [m, n] = [grid.length, grid[0].length];
    const visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

    console.log({ m, n });

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            const char = grid[y][x];
            if (!visited[y][x]) {
                console.log();
                console.log();
                console.log({ x, y });
                if (findCycle(char, [x, y], [-1, -1])) {
                    return true;
                }
            }
        }
    }
    return false;

    function findCycle(char, pos, prev) {
        console.log();
        console.log({ char, pos, prev });
        const [x, y] = pos;
        if (visited[y][x]) {
            console.log({ x, y });
            return true;
        }
        else {
            visited[y][x] = true;
            const [px, py] = prev;
            return dirs.some(([ox, oy]) => {
                const [nx, ny] = nextPos = [x + ox, y + oy];
                console.log({ nx, ny });
                // if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[ny][nx] == char && nx != px && ny != py) {
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[ny][nx] == char && (nx != px || ny != py)) {
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

// run([["a", "a", "a", "a"], ["a", "b", "b", "a"], ["a", "b", "b", "a"], ["a", "a", "a", "a"]])
// run([["c", "c", "c", "a"], ["c", "d", "c", "c"], ["c", "c", "e", "c"], ["f", "c", "c", "c"]])
// run([["a", "b", "b"], ["b", "z", "b"], ["b", "b", "a"]])
run([["b", "a", "c"], ["c", "a", "c"], ["d", "d", "c"], ["b", "c", "c"]]);