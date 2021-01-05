// https://leetcode-cn.com/problems/cherry-pickup-ii/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var cherryPickup = function (grid) {
    const n = grid[0].length;
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => -Infinity));
    dp[0][n - 1] = grid[0][0] + grid[0][n - 1];

    for (let i = 1; i < grid.length; i++) {
        const line = grid[i];
        dp2 = Array.from({ length: n }, () => Array.from({ length: n }, () => -Infinity));
        for (let l = 0; l < n - 1; l++) {
            for (let r = l + 1; r < n; r++) {
                let max = -Infinity;
                for (const pl of [l - 1, l, l + 1]) {
                    if (pl >= 0) {
                        for (const pr of [r - 1, r, r + 1]) {
                            if (pr < n) {
                                max = Math.max(max, dp[pl][pr]);
                            }
                        }
                    }
                }
                dp2[l][r] = line[l] + line[r] + max;
            }
        }
        dp = dp2;
    }
    return Math.max(...dp.map(a => Math.max(...a)));
};

function run(grid) {
    Matrix.logMatrixInArray(grid);
    Test.logArgs = false;
    Test.run(cherryPickup, grid);
}

// run([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]]);
// run([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]]);
// run([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 9999, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]]);
// run([[1, 0, 0, 3], [0, 0, 0, 3], [0, 0, 3, 3], [9, 0, 3, 3]]);
// run([[1, 1], [1, 1]]);
run([[0, 8, 7, 10, 9, 10, 0, 9, 6], [8, 7, 10, 8, 7, 4, 9, 6, 10], [8, 1, 1, 5, 1, 5, 5, 1, 2], [9, 4, 10, 8, 8, 1, 9, 5, 0], [4, 3, 6, 10, 9, 2, 4, 8, 10], [7, 3, 2, 8, 3, 3, 5, 9, 8], [1, 2, 6, 5, 6, 2, 0, 10, 0]]);