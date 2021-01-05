// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('./Common/Test');

var minDays = function (n) {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    // const dp = [0];

    // for (let i = 1; i < n + 1; i++) {
    for (let i = 0; i < n; i++) {
    // for (let i = 0; i <= n; i++) {
        Test.log();
        // Test.log(dp)
        const days = dp[i] + 1;
        // const days = i + 1;
        const remains = n - i;
        // const nextDay = dp[eaten] + 1;
        if (remains % 3 == 0) {
            update(i + 2 * remains / 3, days);
        }
        if (remains % 2 == 0) {
            update(i + remains / 2, days);
        }
        update(i + 1, days);
    }
    // return dp[n - 1] + 1;
    console.log(dp);
    return dp[n];

    // for (let i = 0; i < n; i++) {

    function update(eaten, days) {
        Test.log("update");
        Test.log({ eaten, days })
        Test.log(dp[eaten]);
        // if (eaten <= n && days < dp[eaten]) {
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