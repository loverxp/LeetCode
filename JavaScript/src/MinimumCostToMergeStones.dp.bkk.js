// https://leetcode-cn.com/problems/minimum-cost-to-merge-stones/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

// Test.isLogOn = false;

var mergeStones = function (stones, k) {
    // const n = stones.length - k + 1;
    const n = stones.length;
    // const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    // for (let l = 0; l < n - k + 1; l++) {
    // const element = array[l];

    // }

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += stones[i];
    }
    // let dp = [sum];
    let dp = [[sum, sum]];
    // return prevDP;
    // for (let i = 0; i < n - k + 1; i++) {
    for (let i = 0; i < n - k; i++) {
        sum -= stones[i];
        sum += stones[i + k];
        // prevDP.push(sum);
        dp.push([sum, sum]);        //sum, cost
    }
    // return dp;
    // return prevDP;

    // for (let len = 0; len < n - k + 1; len++) {
    // for (let len = k; len < n - k; len++) {
    // for (let len = k, dpSize = n - len; len < n; len++, dpSize--) {
    // for (let len = k + 1, dpSize = n - len; len < n; len += k - 1, dpSize -= k - 1) {
    for (let len = 2 * k - 1, dpSize = n - len; len < n; len += k - 1, dpSize -= k - 1) {
        // const dp = Array(dpSize).fill();
        const dp2 = [];

        // let sum = 0;
        // for (let i = 0; i < len; i++) {
        // sum += stones[i];
        // }

        for (let i = 0; i < dpSize; i++) {
            // sum -= stones[i];
            // sum += stones[i + k];
            const [prevSum1, prevCost1] = dp[i];
            const [prevSum2, prevCost2] = dp[i + 1];

            // dp[i] = 

        }

        dp = dp2;
    }

    return dp[0][1];
};

function run(stones, k) {
    Test.run(mergeStones, stones, k);
}

run([3, 2], 2);
run([3, 2, 4], 2);
// run([3, 2, 4, 1], 2);

// run([3, 2, 4, 1], 3);
// run([3, 5, 1, 2, 6], 3);