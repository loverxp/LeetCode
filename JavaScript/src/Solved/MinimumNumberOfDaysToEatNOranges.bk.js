// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('./Common/Test');

var minDays = function (n) {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    let eatens = [0];
    while (eatens.length) {
        const eatens2 = [];
        const update = (next, days) => {
            if (updateDP(next, days)) {
                eatens2.push(next);
            }
        }
        for (const eaten of eatens) {
            const remains = n - eaten;
            const nextDay = dp[eaten] + 1;
            if (remains % 3 == 0) {
                update(eaten + 2 * remains / 3, nextDay);
            }
            if (remains % 2 == 0) {
                update(eaten + remains / 2, nextDay);
            }
            update(eaten + 1, nextDay);
        }
        eatens = eatens2;
    }

    return dp[n];

    function updateDP(eaten, days) {
        if (days < dp[eaten]) {
            dp[eaten] = days;
            return true;
        }
        return false;
    }
};

function run(n) {
    Test.run(minDays, n);
}

// run(1)
// run(10)
// run(6)
// run(56)
run(99999)
// run(99999999)