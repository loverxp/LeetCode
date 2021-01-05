// https://leetcode-cn.com/problems/max-dot-product-of-two-subsequences/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var maxDotProduct = function (nums1, nums2) {
    const [m, n] = [nums1.length, nums2.length];
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    dp[0][0] = nums1[0] * nums2[0];
    for (let i = 1; i < m; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], nums1[i] * nums2[0]);
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], nums1[0] * nums2[j]);
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const product = nums1[i] * nums2[j];
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + product, product);
        }
    }
    return dp[m - 1][n - 1];
};

function run(nums1, nums2) {
    Test.run(maxDotProduct, nums1, nums2);
}

function randomTest(m, n) {
    const random = () => Math.trunc(Math.random() * 100) - 50;
    const nums1 = Array.from({ length: m }, () => random());
    const nums2 = Array.from({ length: n }, () => random());
    Test.run(maxDotProduct, nums1, nums2);
}

run([2, 1, -2, 5], [3, 0, -6])
run([3, -2], [2, -6, 7])
run([-1, -1], [1, 1])
run([-33, -41, 31, -38, 40, -9, 14, 12, -32, 21], [-16, 30, -38, -17, 15, -39, -26, 10, 25])
run([-31, 28, -31, -24, -6, -39, -18, 46, -34, -6], [21, -46, -34, 16, -44, -8, -7, -21, -30])
run([-3, -8, 3, -10, 1, 3, 9], [9, 2, 3, 7, -9, 1, -8, 5, -1, -1])

// randomTest(10, 9);