// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
var Test = require('./Common/Test');

var minCostClimbingStairs = function (cost) {
    cost.push(0);
    const dp = [0, 0];
    for (let i = 0; i < cost.length; i++) {
        dp[i + 2] = cost[i] + Math.min(dp[i], dp[i + 1]);
    }
    return dp[cost.length + 1];
};

function run(cost) {
    Test.run(minCostClimbingStairs, cost);
}

run([0, 0, 0, 0]);
run([10, 15, 20]);
run([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);