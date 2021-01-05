// https://leetcode-cn.com/problems/minimum-difficulty-of-a-job-schedule/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var minDifficulty = function (jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;
    const difficulties = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

    for (let i = 0; i < n; i++) {
        difficulties[i][i] = jobDifficulty[i];
        for (let j = i + 1; j < n; j++) {
            difficulties[i][j] = Math.max(difficulties[i][j - 1], jobDifficulty[j]);
        }
    }
    const dp = Array.from({ length: d }, () => Array.from({ length: n }, () => Infinity));
    dp[0][0] = jobDifficulty[0];

    for (let j = 1; j < n - d + 1; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], jobDifficulty[j]);
    }

    for (let i = 1; i < d; i++) {
        for (let j = i; j < n - d + i + 1; j++) {
            for (let k = i - 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + difficulties[k + 1][j]);
            }
        }
    }
    return dp[d - 1][n - 1];
};

function run(jobDifficulty, d) {
    Test.run(minDifficulty, jobDifficulty, d);
}

run([6, 5, 4, 3, 2, 1], 2)
run([9, 9, 9], 4)
run([1, 1, 1], 3)
run([7, 1, 7, 1, 7, 1], 3)
run([11, 111, 22, 222, 33, 333, 44, 444], 6)
