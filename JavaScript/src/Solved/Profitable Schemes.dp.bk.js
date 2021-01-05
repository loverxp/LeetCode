// https://leetcode-cn.com/problems/profitable-schemes/
var Test = require('./Common/Test');

var profitableSchemes = function (G, P, group, profit) {
    const mod = 1e9 + 7;
    const n = group.length;
    // const dp = Array.from({ length: n + 1 }, () => Array.from({ length: G + 1 }, () => Array(P + 1).fill(-1)));
    // const dp = Array.from({ length: n + 1 }, () => Array.from({ length: G + 1 }, () => Array(P + 1).fill(0)));
    // let dp = Array.from({ length: G + 1 }, () => Array(P + 1).fill(0));
    let dp = Array.from({ length: P + 1 }, () => Array(G + 1).fill(0));

    if (group[0] <= G) {
        const p = profit[0] > P ? P : profit[0];
        // dp[0][group[0]][profit[0]] = 1;
        // dp[group[0]][profit[0]] = 1;
        dp[p][group[0]] = 1;
    }

    for (let i = 1; i < n; i++) {
        let dp2 = JSON.parse(JSON.stringify(dp));
        // const g = group[i];
        // for (let j = g; j + g < G + 1; j++) {
        for (let j = 0; j + group[i] < G + 1; j++) {
            const g = j + group[i];
            for (let k = 0; k < P + 1; k++) {
                // const p = dp[j][k] + profit[i];
                let p = k + profit[i];
                p = p > P ? P : p;
                // dp2[p][g] += dp[j][k];
                dp2[p][g] += dp[k][j];
                dp2[p][g] %= mod;
            }
        }
        dp = dp2;
    }
    return dp[P];
};

function run(G, P, group, profit) {
    Test.run(profitableSchemes, G, P, group, profit);
}

run(5, 3, [2, 2], [2, 3])
// run(10, 5, [2, 3, 5], [6, 7, 8])

// function randomTest() {
//     const n = Math.trunc(Math.random() * 30);
//     const nums = Array.from({ length: n }, () => Math.trunc(Math.random() * 10000));
//     console.log({ n, nums });
//     run(nums);
// }