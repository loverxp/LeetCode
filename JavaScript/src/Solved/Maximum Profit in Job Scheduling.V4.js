// https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling/
var Test = require('./Common/Test');

Test.isLogOn = false;

var jobScheduling = function (startTime, endTime, profit) {
    const n = startTime.length;
    const keys = [...startTime.keys()].sort((i, j) => endTime[i] - endTime[j]);
    const dp = Array.from({ length: n }, () => 0);
    // dp[0] = profit[0];
    dp[0] = profit[keys[0]];

    Test.log({ keys });
    Test.log({ dp });

    startTime2 = [];
    endTime2 = [];
    profit2 = [];
    for (let i = 0; i < n; i++) {
        const ii = keys[i];
        startTime2.push(startTime[ii]);
        endTime2.push(endTime[ii]);
        profit2.push(profit[ii]);
    }
    Test.log({ startTime2, endTime2, profit2 });

    const ii = keys[0];
    Test.log();
    Test.log(startTime[ii], endTime[ii], profit[ii]);

    for (let i = 1; i < n; i++) {
        const ii = keys[i];

        Test.log();
        Test.log(startTime[ii], endTime[ii], profit[ii]);
        Test.log({ dp });

        let j = i - 1;
        while (j >= 0 && startTime[ii] < endTime[keys[j]]) j--;
        let prev = j >= 0 ? dp[j] : 0;
        Test.log({ i, j, prev });
        dp[i] = Math.max(dp[i - 1], prev + profit[ii]);
    }
    Test.log();
    Test.log({ dp });
    return dp[n - 1];
};

function run(startTime, endTime, profit) {
    Test.run(jobScheduling, startTime, endTime, profit);
}

// run([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])
// run([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
// run([1, 1, 1], [2, 3, 4], [5, 6, 4])
// run([1, 2, 3], [4, 3, 5], [10, 10, 10]);
// run([1, 2, 3, 4], [4, 3, 5, 6], [10, 10, 10, 10]);
run([24, 24, 7, 2, 1, 13, 6, 14, 18, 24], [27, 27, 20, 7, 14, 22, 20, 24, 19, 27], [6, 1, 4, 2, 3, 6, 5, 6, 9, 8]);

// run([11, 11, 4, 2, 1, 5, 3, 6, 7, 11], [12, 12, 9, 7, 6, 10, 9, 11, 8, 12], [6, 1, 4, 2, 3, 6, 5, 6, 9, 8]);
// run([4, 3], [9, 9], [4, 5]);
// run([1, 1, 1], [2, 2, 2], [6, 1, 8]);
// run([11, 11, 4, 2, 1, 5, 3, 6, 7], [12, 12, 9, 7, 6, 10, 9, 11, 8, 12], [6, 1, 4, 2, 3, 6, 5, 6, 9, 8]);

// run([11, 11, 4, 2, 1, 5, 3, 6 ], [12, 12, 9, 7, 6, 10, 9, 11, 8, 12], [6, 1, 4, 2, 3, 6, 5, 6, 9, 8]);
// run([11, 11, 4, 2, 1, 5, 3  ], [12, 12, 9, 7, 6, 10, 9, 11, 8, 12], [6, 1, 4, 2, 3, 6, 5, 6, 9, 8]);
// run([4, 2, 1, 5, 3, 6], [9, 7, 6, 10, 9, 11], [4, 2, 3, 6, 5, 6]);
// run([4, 2, 1, 5, 3], [9, 7, 6, 10, 9, 11, 8, 12], [4, 2, 3, 6, 5, 6, 9, 8]);
// run([5, 3, 6], [9, 7, 6, 10, 9, 11], [4, 2, 3, 6, 5, 6]);
// run([4, 2, 1], [9, 7, 6], [4, 2, 3]);
// run([4, 2], [9, 7], [4, 2]);
// run([2], [7], [2]);