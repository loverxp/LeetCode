// https://leetcode-cn.com/problems/minimum-cost-to-merge-stones/
var Test = require('./Common/Test');

Test.isLogOn = false;

var mergeStones = function (stones, k) {
    let n = stones.length;
    if ((n - 1) % (k - 1) != 0) return -1;
    let states = [[stones, 0]];

    while (n > 1) {
        const exists = new Map();
        n -= k - 1;
        for (const [stones, cost] of states) {
            for (let i = 0; i < n; i++) {
                const stones2 = stones.slice(0, i);
                let sum = 0;
                for (let j = 0; j < k; j++) {
                    sum += stones[i + j];
                }
                stones2.push(sum);
                for (let j = i + k; j < stones.length; j++) {
                    stones2.push(stones[j]);
                }
                const cost2 = cost + sum;
                const key = stones2.join(',');
                if (!exists.has(key) || exists.get(key) > cost2) {
                    exists.set(key, cost2);
                }
            }
        }
        states = Array.from(exists).map(([stones, cost]) => [(stones.split(',').map(s => parseInt(s))), cost]);
    }
    return Math.min(...states.map(([, cost]) => cost));
};

function run(stones, k) {
    Test.run(mergeStones, stones, k);
}

// run([3, 2, 4, 1], 2);
// run([3, 2, 4, 1], 3);
// run([3, 5, 1, 2, 6], 3);
// run([3, 5, 1, 2, 6], 2);
// run([69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14, 31, 4], 2);
// run([69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14], 2);
// run([69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14], 3);
// run([69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14, 31, 4, 69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14, 31, 4], 2);
run([16, 43, 87, 30, 4, 98, 12, 30, 47, 45, 32, 4, 64, 14, 24, 84, 86, 51, 11, 22, 4], 2);