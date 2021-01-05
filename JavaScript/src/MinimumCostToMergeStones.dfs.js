// https://leetcode-cn.com/problems/minimum-cost-to-merge-stones/
var Test = require('./Common/Test');

// Test.isLogOn = false;

var mergeStones = function (stones, k) {
    let cost = dfs(stones, 0);
    return isFinite(cost) ? cost : -1;

    function dfs(stones, cost) {
        if (stones.length == 1) {
            return cost;
        }
        else if (stones.length < k) {
            return Infinity;
        }
        else {
            const n = stones.length - k + 1;

            let min = Infinity;
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
                min = Math.min(min, dfs(stones2, cost + sum));
            }
            return min;
        }
    }
};

function run(stones, k) {
    Test.run(mergeStones, stones, k);
}

// run([3, 2, 4, 1], 2);
// run([3, 2, 4, 1], 3);
// run([3, 5, 1, 2, 6], 3);
// run([69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14, 31, 4], 2);
run([69, 39, 79, 78, 16, 6, 36, 97, 79, 27, 14], 2);