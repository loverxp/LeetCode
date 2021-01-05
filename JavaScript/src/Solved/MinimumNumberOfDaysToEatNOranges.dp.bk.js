// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('./Common/Test');

var minDays = function (n) {
    const dp = Array(n + 1).fill(Infinity);
    // const dp = Array(n + 1).fill();
    dp[0] = 0;
    // const dp = [0];

    for (let i = 0; i < n; i++) {
        // for (let i = 0; i <= n; i++) {
        Test.log();
        // Test.log(dp)
        const days = dp[i] + 1;
        const remains = n - i;
        if (remains % 3 == 0) {
            update(i + 2 * remains / 3, days);
        }
        if (remains % 2 == 0) {
            update(i + remains / 2, days);
        }
        update(i + 1, days);
    }
    console.log(dp);
    return dp[n];

    function update(eaten, days) {
        Test.log("update");
        Test.log({ eaten, days })
        Test.log(dp[eaten]);
        // if (eaten <= n && days < dp[eaten]) {
        // if (!isFinite(dp[eaten])) {
        // }

        if (days < dp[eaten]) {
        // if (eaten < n && days < dp[eaten]) {
        // if (undefined == dp[eaten]) {
        // if (!dp[eaten]) {
            dp[eaten] = days;
            // return true;
        }
        // return false;
    }
};

function run(n) {
    Test.run(minDays, n);
}

// run(1)
// run(10)
// run(6)
run(26)
// run(56)
// run(99999)
// run(999999)
// run(9999999)
// run(99999999)
// run(1e8)