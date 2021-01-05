// https://leetcode-cn.com/problems/detect-cycles-in-2d-grid/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var containsCycle = function (grid) {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const [m, n] = [grid.length, grid[0].length];
    const visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            const char = grid[y][x];
            if (!visited[y][x]) {
                if (findCycle(char, [x, y], [-1, -1])) {
                    return true;
                }
            }
        }
    }
    return false;

    function findCycle(char, pos, prev) {
        const [x, y] = pos;
        visited[y][x] = true;
        let states = [[pos, prev]];
        while (states.length) {
            const state2 = [];
            for (const [pos, [px, py]] of states) {
                const [x, y] = pos;
                for (const [ox, oy] of dirs) {
                    const [nx, ny] = nextPos = [x + ox, y + oy];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[ny][nx] == char && (nx != px || ny != py)) {
                        if (visited[ny][nx]) {
                            return true;
                        }
                        else {
                            visited[ny][nx] = true;
                            state2.push([nextPos, pos]);
                        }
                    }
                }
            }
            states = state2;
        }
        return false;
    }
};

function run(grid) {
    Test.run(containsCycle, grid);
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(containsCycle, id);
}

// run([["a", "a", "a", "a"], ["a", "b", "b", "a"], ["a", "b", "b", "a"], ["a", "a", "a", "a"]])
// run([["c", "c", "c", "a"], ["c", "d", "c", "c"], ["c", "c", "e", "c"], ["f", "c", "c", "c"]])
// run([["a", "b", "b"], ["b", "z", "b"], ["b", "b", "a"]])
// run([["b", "a", "c"], ["c", "a", "c"], ["d", "d", "c"], ["b", "c", "c"]]);

testWithTestcase(109475177);

// [["a", "a", "a", "a"], ["a", "b", "b", "a"], ["a", "b", "b", "a"], ["a", "a", "a", "a"]]
// [["b", "a", "c"], ["c", "a", "c"], ["d", "d", "c"], ["b", "c", "c"]]
// [["c", "c", "c", "a"], ["c", "d", "c", "c"], ["c", "c", "e", "c"], ["f", "c", "c", "c"]]
// [["a", "b", "b"], ["b", "z", "b"], ["b", "b", "a"]]