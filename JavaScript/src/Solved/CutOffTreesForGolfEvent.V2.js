// https://leetcode-cn.com/problems/cut-off-trees-for-golf-event/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var cutOffTree = function (forest) {
    const height = forest.length;
    const width = forest[0].length;
    const trees = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (forest[y][x] > 1) trees.push([x, y]);
        }
    }
    trees.sort(([x1, y1], [x2, y2]) => forest[y1][x1] - forest[y2][x2]);
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let start = [0, 0];
    let totalSteps = 0;
    for (const tree of trees) {
        const steps = dfs(start, tree);
        if (steps != -1) {
            totalSteps += steps;
            start = tree;
        }
        else {
            return -1;
        }
    }
    return totalSteps;

    function dfs(start, target) {
        const stepsArray = Array(height).fill(0).map(a => Array(width).fill(Infinity));
        stepsArray[start[1]][start[0]] = 0;
        let queue = [start];
        while (queue.length > 0 && !equql(queue[0], target)) {
            const [x, y] = queue.shift();
            let steps = stepsArray[y][x] + 1;
            for (const [offsetX, offsetY] of dirs) {
                const [nx, ny] = [x + offsetX, y + offsetY];
                if (nx >= 0 && nx < width && ny >= 0 && ny < height && steps < stepsArray[ny][nx] && forest[ny][nx] != 0) {
                    stepsArray[ny][nx] = steps;
                    queue.push([nx, ny]);
                }
            }
        }
        if (queue.length > 0) {
            const [x, y] = queue[0];
            return stepsArray[y][x];
        }
        else {
            return -1;
        }
    }

    function equql([x1, y1], [x2, y2]) {
        return x1 == x2 && y1 == y2;
    }
};

function test(forest) {
    Matrix.logMatrixInArray(forest);
    Test.test(cutOffTree, forest);
}

test([[1, 2, 3], [0, 0, 4], [7, 6, 5]]);
test([[1, 2, 3], [0, 0, 0], [7, 6, 5]]);
test([[2, 3, 4], [0, 0, 5], [8, 7, 6]]);
test([[7, 6, 5], [0, 0, 4], [3, 2, 1]]);
test([[1, 1, 1], [0, 0, 1], [1, 1, 1]]);
test([[1, 1, 1], [0, 0, 0], [1, 1, 1]]);
test([[1, 1, 1], [0, 0, 0], [1, 2, 1]]);
test([[54581641, 64080174, 24346381, 69107959], [86374198, 61363882, 68783324, 79706116], [668150, 92178815, 89819108, 94701471], [83920491, 22724204, 46281641, 47531096], [89078499, 18904913, 25462145, 60813308]]);

// [[1, 2, 3], [0, 0, 4], [7, 6, 5]]
// [[1, 2, 3], [0, 0, 0], [7, 6, 5]]
// [[2, 3, 4], [0, 0, 5], [8, 7, 6]]
// [[7, 6, 5], [0, 0, 4], [3, 2, 1]]
// [[1, 1, 1], [0, 0, 1], [1, 1, 1]]
// [[1, 1, 1], [0, 0, 0], [1, 1, 1]]
// [[1, 1, 1], [0, 0, 0], [1, 2, 1]]
// [[54581641, 64080174, 24346381, 69107959], [86374198, 61363882, 68783324, 79706116], [668150, 92178815, 89819108, 94701471], [83920491, 22724204, 46281641, 47531096], [89078499, 18904913, 25462145, 60813308]]
