// https://leetcode-cn.com/problems/cut-off-trees-for-golf-event/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var cutOffTree = function (forest) {
    const height = forest.length;
    const width = forest[0].length;

    const trees = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const treeHeight = forest[y][x];
            if (treeHeight > 1) {
                const i = trees.findIndex(([x, y]) => forest[y][x] < treeHeight);
                trees.splice(i == -1 ? trees.length : i, 0, [x, y]);
            }
        }
    }

    const stepsArray = Array(height).fill(0).map(a => Array(width).fill(Infinity));
    stepsArray[0][0] = 0;

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [[0, 0]];
    let tree = trees.pop();
    let totalSteps = 0;
    while (queue.length > 0 && tree) {
        const [x, y] = queue.shift();
        let steps = stepsArray[y][x];
        if (x == tree[0] && y == tree[1]) {
            totalSteps += steps;
            stepsArray.forEach(a => {
                for (let i = 0; i < a.length; i++) {
                    a[i] = Infinity;
                }
            });
            stepsArray[y][x] = 0;
            tree = trees.pop();
            steps = 0;
            queue = [];
        }
        steps++;
        for (const [offsetX, offsetY] of dirs) {
            const [nx, ny] = [x + offsetX, y + offsetY];
            if (nx >= 0 && nx < width && ny >= 0 && ny < height && steps < stepsArray[ny][nx] && forest[ny][nx] != 0) {
                stepsArray[ny][nx] = steps;
                queue.push([nx, ny]);
            }
        }
    }

    return tree ? -1 : totalSteps;
};

function test(forest) {
    Matrix.logMatrixInArray(forest);
    Test.test(cutOffTree, forest);
}

// test([[1, 2, 3], [0, 0, 4], [7, 6, 5]]);
// test([[1, 2, 3], [0, 0, 0], [7, 6, 5]]);
// test([[2, 3, 4], [0, 0, 5], [8, 7, 6]]);
// test([[7, 6, 5], [0, 0, 4], [3, 2, 1]]);
// test([[1, 1, 1], [0, 0, 1], [1, 1, 1]]);
// test([[1, 1, 1], [0, 0, 0], [1, 1, 1]]);
// test([[1, 1, 1], [0, 0, 0], [1, 2, 1]]);
test([[54581641, 64080174, 24346381, 69107959], [86374198, 61363882, 68783324, 79706116], [668150, 92178815, 89819108, 94701471], [83920491, 22724204, 46281641, 47531096], [89078499, 18904913, 25462145, 60813308]]);
