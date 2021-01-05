// https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling/
var Test = require('./Common/Test');

var jobScheduling = function (startTime, endTime, profit) {
    startTime.unshift(0)
    endTime.unshift(0)
    profit.unshift(0)
    const n = startTime.length;
    const dp = Array.from({ length: n }, () => 0);
    dp[0] = 0;
    for (let i = 1; i < n; i++) {
        console.log();
        console.log({ i });
        let max = 0;
        // for (let j = 0; j < i - 1; j++) {
        for (let j = 0; j < i; j++) {
            console.log({ j });
            if (startTime[i] >= endTime[j]) {
                max = Math.max(max, dp[j]);
                console.log({ max });
            }
        }
        dp[i] = max + profit[i];
    }
    // return dp[n - 1];
    // return Math.max(...dp);
    return dp;
};

function run(startTime, endTime, profit) {
    Test.run(jobScheduling, startTime, endTime, profit);
}

// run([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])
run([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
// run([1, 1, 1], [2, 3, 4], [5, 6, 4])
