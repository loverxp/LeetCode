// https://leetcode-cn.com/problems/bricks-falling-when-hit/

var Test = require('./Common/Test');
var Matrix = require('./Common/Matrix').Matrix;

var hitBricks = function (grid, hits) {
    const [m, n] = [grid.length, grid[0].length];
    const prevs = Array.from({ length: m }, () => Array(n).fill());

};

function test(grid, hits) {
    Matrix.logMatrixInArray(grid);
    console.log(hits);
    Test.test(hitBricks, grid, hits);
}

test([[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]]);
// test([[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]]);
test([[1, 0, 0, 0], [1, 1, 1, 1]][[1, 2], [1, 0]]);
test([[1, 0, 0, 0], [1, 1, 1, 1]][[1, 0], [1, 2]]);