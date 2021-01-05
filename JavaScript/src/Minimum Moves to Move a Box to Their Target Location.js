// https://leetcode-cn.com/problems/minimum-moves-to-move-a-box-to-their-target-location/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var minPushBox = function (grid) {
    // const dirs = [0, 1, 2, 3, 4];
    const [m, n] = [grid.length, grid[0].length];
    const start = [];
    const target = [];
    const player = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            switch (grid[i][j]) {
                case 'S':
                    start.push(i, j);
                    break;

                case 'T':
                    target.push(i, j);
                    break;

                case 'B':
                    player.push(i, j);
                    break;
            }
        }
    }

    const [si, sj] = start;
    const [ti, tj] = target;
    const [pi, pj] = player;
    const steps = Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity));
    const dirs = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));   // 1.left, 2.right, 3.up, 4.down
    steps[si][sj] = 0;
    // let dir = 0;


};

function run(grid) {
    Matrix.logMatrixInString(grid);
    Test.logArgs = false;
    Test.run(minPushBox, grid);
}

run([["#", "#", "#", "#", "#", "#"], ["#", "T", "#", "#", "#", "#"], ["#", ".", ".", "B", ".", "#"], ["#", ".", "#", "#", ".", "#"], ["#", ".", ".", ".", "S", "#"], ["#", "#", "#", "#", "#", "#"]]);
run([["#", "#", "#", "#", "#", "#"], ["#", "T", "#", "#", "#", "#"], ["#", ".", ".", "B", ".", "#"], ["#", "#", "#", "#", ".", "#"], ["#", ".", ".", ".", "S", "#"], ["#", "#", "#", "#", "#", "#"]]);
run([["#", "#", "#", "#", "#", "#"], ["#", "T", ".", ".", "#", "#"], ["#", ".", "#", "B", ".", "#"], ["#", ".", ".", ".", ".", "#"], ["#", ".", ".", ".", "S", "#"], ["#", "#", "#", "#", "#", "#"]]);
run([["#", "#", "#", "#", "#", "#", "#"], ["#", "S", "#", ".", "B", "T", "#"], ["#", "#", "#", "#", "#", "#", "#"]]);