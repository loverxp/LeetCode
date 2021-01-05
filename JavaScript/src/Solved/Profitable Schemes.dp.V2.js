// https://leetcode-cn.com/problems/profitable-schemes/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var profitableSchemes = function (G, P, group, profit) {
    const mod = 1e9 + 7;
    const n = group.length;
    let dp = new Map();

    // let last = new Map();
    if (group[0] <= G) {
        const p = profit[0] > P ? P : profit[0];
        dp.set(p, new Map([[group[0], 1]]));
    }

    for (let i = 1; i < n; i++) {
        let dp2 = new Map();
        for (const [j, map] of dp) {
            const map2 = new Map();
            dp2.set(j, map2);
            for (const [k, count] of map) {
                map2.set(k, count);
            }
        }
        if (group[i] <= G) {
            const p = profit[i] > P ? P : profit[i];
            const g = group[0];
            // dp2.set(p, new Map(group[0], 1));
            if (!dp2.has(p)) {
                // dp2.set(p, new Map());
                dp2.set(p, new Map([[g, 1]]));
            }
            else {
                const map = dp2.get(p);
                map.set(g, map.get(g) + 1);
            }
        }
        for (const [j, map] of dp) {
            let p = j + profit[i];
            p = p > P ? P : p;
            for (const [k, count] of map) {
                const g = k + group[i];
                if (g <= G) {
                    if (!dp2.has(p)) {
                        dp2.set(p, new Map());
                    }
                    const map = dp2.get(p);
                    if (!map.has(g)) {
                        map.set(g, 0);
                    }
                    map.set(g, (count + map.get(g)) % mod);
                }
            }
        }
        // for (let j = 0; j + group[i] < G + 1; j++) {
        //     const g = j + group[i];
        //     for (let k = 0; k < P + 1; k++) {
        //         if (dp[k][j]) {
        //             let p = k + profit[i];
        //             p = p > P ? P : p;
        //             dp2[p][g] += dp[k][j];
        //             dp2[p][g] %= mod;
        //         }
        //     }
        // }
        dp = dp2;
    }
    return 0;
    // return dp;
    // return dp.get(P);
    let sum = 0;
    for (const [, count] of dp.get(P)) {
        // for (const [, count] of map) {
        sum += count;
        sum %= mod;
        // }
    }
    return sum;
    // return dp[P].reduce((a, b) => (a + b) % mod);
};

function run(G, P, group, profit) {
    Test.run(profitableSchemes, G, P, group, profit);
}


// run(5, 3, [2, 2], [2, 3])
// run(10, 5, [2, 3, 5], [6, 7, 8])
// run(1, 1, [2, 2, 2, 2, 2], [1, 2, 1, 1, 0])

//692206787
run(100, 100, [2, 5, 36, 2, 5, 5, 14, 1, 12, 1, 14, 15, 1, 1, 27, 13, 6, 59, 6, 1, 7, 1, 2, 7, 6, 1, 6, 1, 3, 1, 2, 11, 3, 39, 21, 20, 1, 27, 26, 22, 11, 17, 3, 2, 4, 5, 6, 18, 4, 14, 1, 1, 1, 3, 12, 9, 7, 3, 16, 5, 1, 19, 4, 8, 6, 3, 2, 7, 3, 5, 12, 6, 15, 2, 11, 12, 12, 21, 5, 1, 13, 2, 29, 38, 10, 17, 1, 14, 1, 62, 7, 1, 14, 6, 4, 16, 6, 4, 32, 48], [21, 4, 9, 12, 5, 8, 8, 5, 14, 18, 43, 24, 3, 0, 20, 9, 0, 24, 4, 0, 0, 7, 3, 13, 6, 5, 19, 6, 3, 14, 9, 5, 5, 6, 4, 7, 20, 2, 13, 0, 1, 19, 4, 0, 11, 9, 6, 15, 15, 7, 1, 25, 17, 4, 4, 3, 43, 46, 82, 15, 12, 4, 1, 8, 24, 3, 15, 3, 6, 3, 0, 8, 10, 8, 10, 1, 21, 13, 10, 28, 11, 27, 17, 1, 13, 10, 11, 4, 36, 26, 4, 2, 2, 2, 10, 0, 11, 5, 22, 6])

// run(5, 3, [6, 7], [2, 3]);

// function randomTest() {
//     const n = Math.trunc(Math.random() * 30);
//     const nums = Array.from({ length: n }, () => Math.trunc(Math.random() * 10000));
//     console.log({ n, nums });
//     run(nums);
// }