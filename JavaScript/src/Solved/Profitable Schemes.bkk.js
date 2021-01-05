// https://leetcode-cn.com/problems/profitable-schemes/
var Test = require('../Common/Test');

var profitableSchemes = function (G, P, group, profit) {
    const mod = 1e9 + 7;
    const n = group.length;
    // const dp = Array.from({ length: P + 1 }, () => Array.from({ length: G + 1 }, () => 0));
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: G + 1 }, () => new Map()));

    // return dfs(0, 0, 0);
    return dfs(0, 0, 0, []);

    // function dfs(start, g, p) {
    function dfs(start, g, p, arr) {
        // if (start == n) return 0;
        // if (g > G) return 0;
        // if (start == n) return p >= P ? 1 : 0;
        if (g > G) {
            console.log({ g });
            return 0;
        }
        // if (start == n) {
        // console.log({ p, arr });
        // return p >= P ? 1 : 0;
        // }

        console.log();
        console.log({ start, g, p });
        if (!dp[start][g].has(p)) {
            // let ways = ps >= P ? 1 : 0;
            // let count = 0;
            let count = p >= P ? 1 : 0;
            for (let i = start; i < n; i++) {
                // count += dfs(i + 1, g + group[i], p + profit[i]);
                const arr2 = [...arr, i];
                count += dfs(i + 1, g + group[i], p + profit[i], arr2);
            }
            console.log({ start, g, p, count });
            dp[start][g].set(p, count % mod);
        }
        else {
            console.log("exists:", dp[start][g].get(p));
        }
        return dp[start][g].get(p);
    }
};

function run(G, P, group, profit) {
    Test.run(profitableSchemes, G, P, group, profit);
}

// run(5, 3, [2, 2], [2, 3])
run(10, 5, [2, 3, 5], [6, 7, 8])

// function randomTest() {
//     const n = Math.trunc(Math.random() * 30);
//     const nums = Array.from({ length: n }, () => Math.trunc(Math.random() * 10000));
//     console.log({ n, nums });
//     run(nums);
// }