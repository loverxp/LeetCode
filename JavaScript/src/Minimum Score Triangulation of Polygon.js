// https://leetcode-cn.com/problems/minimum-score-triangulation-of-polygon/
var Test = require('./Common/Test');

var minScoreTriangulation = function(nums) {
    let n = nums.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

    for (let i = 0; i < n - 1; i++) {
        dp[i][i + 1] = 0;
    }

    for (let d = 2; d < n; d++) {
        for (let l = 0; l < n; l++) {
            const r = l + d;
            for (let i = l + 1; i < r; i++) {
                let ii = i % n;
                let rr = r % n;
                dp[l][rr] = Math.min(dp[l][rr], nums[ii] * nums[l] * nums[rr] + dp[l][ii] + dp[ii][rr]);
            }
        }
    }
    let result = Infinity;
    for (let i = 0; i < n; i++) {
        result = Math.min(result, dp[i][(n + i - 1) % n]);
        console.log({ result })
    }
    return result;
};

function run(params) {
    // Test.run(min, params);
}

