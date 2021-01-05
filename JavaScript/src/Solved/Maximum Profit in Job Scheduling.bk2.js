// https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling/
var Test = require('./Common/Test');

var jobScheduling = function (startTime, endTime, profit) {
    startTime.push(0);
    endTime.push(0);
    profit.push(0);
    const n = startTime.length;
    // const keys = [...startTime.keys()].sort((i, j) => startTime[i] - startTime[j]);
    const keys = [...startTime.keys()].sort((i, j) => endTime[i] - endTime[j]);
    const prevs = Array.from({ length: n }, () => 0);

    for (let i = 1; i < n; i++) {
        const ii = keys[i];
        // for (let j = i - 1; j >= 1; j--) {
        for (let j = i - 1; j > 0; j--) {
            const jj = keys[j];
            if (startTime[ii] >= endTime[jj]) {
                // if (startTime[ii] >= endTime[jj - 1]) {
                prevs[i] = j;
                break;
            }
        }
    }
    console.log({ prevs });
    const dp = Array.from({ length: n }, () => 0);
    for (let i = 1; i < n; i++) {
        const ii = keys[i];
        const prev = prevs[i];
        dp[i] = Math.max(dp[i - 1], dp[prev] + profit[ii]);
    }

    // return dp[n - 1];
    // return Math.max(...dp);
    return dp;
};

function run(startTime, endTime, profit) {
    Test.run(jobScheduling, startTime, endTime, profit);
}

// run([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])
// run([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
// run([1, 1, 1], [2, 3, 4], [5, 6, 4])
// run([1, 2, 3], [4, 3, 5], [10, 10, 10]);
run([1, 2, 3, 4], [4, 3, 5, 6], [10, 10, 10, 10]);