// https://leetcode-cn.com/problems/burst-balloons/
var Test = require('./Common/Test');

var maxCoins = function (nums) {
    nums.push(1);
    nums.unshift(1);
    let n = nums.length;

    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    for (let i = 0; i < n - 1; i++) {
        dp[i][i + 1] = 0;
    }
    for (let d = 2; d < n; d++) {
        for (let l = 0; l < n - d; l++) {
            const r = l + d;
            let max = 0;
            for (let i = l + 1; i < r; i++) {
                max = Math.max(max, nums[i] * nums[l] * nums[r] + dp[l][i] + dp[i][r]);
            }
            dp[l][r] = max;
        }
    }
    return dp[0][n - 1];
};

function run(nums) {
    Test.run(maxCoins, nums);
}

// run([3, 1, 5, 8]);
run([8, 3, 4, 3, 5, 0, 5]);
run([8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]);