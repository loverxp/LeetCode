// https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling/
var Test = require('../Common/Test');

var jobScheduling = function (startTime, endTime, profit) {
    startTime.push(0)
    endTime.push(0)
    profit.push(0)
    const n = startTime.length;
    const keys = [...startTime.keys()].sort((i, j) => startTime[i] - startTime[j]);
    const dp = Array.from({ length: n }, () => 0);

    dp[0] = 0;
    for (let i = 1; i < n; i++) {
        let max = 0;
        const ii = keys[i];
        for (let j = i - 1; j >= 1; j--) {
            const jj = keys[j];
            if (startTime[ii] >= endTime[jj]) {
            }
        }
        for (let j = 0; j < i; j++) {
            const jj = keys[j];
            // if (startTime[i] >= endTime[j]) {
            if (startTime[ii] >= endTime[jj]) {
                max = Math.max(max, dp[j]);
            }
        }
        // dp[i] = max + profit[i];
        dp[i] = max + profit[ii];
    }
    // return dp[n - 1];
    // return Math.max(...dp);
    return dp;
};

function run(startTime, endTime, profit) {
    Test.run(jobScheduling, startTime, endTime, profit);
}

run([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])
run([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
run([1, 1, 1], [2, 3, 4], [5, 6, 4])
