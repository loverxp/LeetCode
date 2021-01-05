// https://leetcode-cn.com/problems/count-all-possible-routes/
var Test = require('../Common/Test');

var countRoutes = function (locations, start, finish, fuel) {
    const mod = 1e9 + 7;
    const n = locations.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: fuel + 1 }, () => 0));
    dp[start][fuel] = 1;

    while (fuel > 0) {
        for (let i = 0; i < n; i++) {
            if (dp[i][fuel]) {
                for (let j = 0; j < n; j++) {
                    if (i != j) {
                        const remain = fuel - Math.abs(locations[i] - locations[j]);
                        if (remain >= 0) {
                            dp[j][remain] += dp[i][fuel];
                            dp[j][remain] %= mod;
                        }
                    }
                }
            }
        }
        fuel--;
    }
    return dp[finish].reduce((a, b) => a + b) % mod;
};

function run(locations, start, finish, fuel) {
    Test.run(countRoutes, locations, start, finish, fuel);
}

run([2, 3, 6, 8, 4], 1, 3, 5)
run([4, 3, 1], 1, 0, 6)
run([5, 2, 1], 0, 2, 3)
run([2, 1, 5], 0, 0, 3)
run([1, 2, 3], 0, 2, 40)
