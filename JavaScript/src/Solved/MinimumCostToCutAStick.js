// https://leetcode-cn.com/problems/minimum-cost-to-cut-a-stick/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var minCost = function (n, cuts) {
    cuts.sort((a, b) => a - b);
    cuts = [0, ...cuts, n];
    n = cuts.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

    for (let i = 0; i < n - 1; i++) {
        dp[i][i + 1] = 0;
    }
    for (let i = 2; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            const l = j, r = j + i;
            let min = Infinity;
            for (let k = l + 1; k < r; k++) {
                min = Math.min(min, dp[l][k] + dp[k][r]);
            }
            dp[l][r] = min + cuts[r] - cuts[l];
        }
    }
    return dp[0][n - 1];
};

function run(n, cuts) {
    Test.run(minCost, n, cuts);
}

run(7, [1, 3, 4, 5]);
run(9, [5, 6, 1, 4, 2]);