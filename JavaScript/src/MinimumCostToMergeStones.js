// https://leetcode-cn.com/problems/minimum-cost-to-merge-stones/
var Test = require('./Common/Test');

// Test.isLogOn = false;

var mergeStones = function (stones, k) {
    // const n = stones.length - k + 1;
    // let cost = dfs(stones, n, 0);
    let cost = dfs(stones, 0);
    return isFinite(cost) ? cost : -1;

    // function dfs(stones, n, cost) {
    function dfs(stones, cost) {
        Test.log();
        Test.log(stones);
        Test.log({ cost });


        if (stones.length == 1) {
            return cost;
        }
        else if (stones.length < k) {
            return Infinity;
        }
        else {
            const n = stones.length - k + 1;
            Test.log({ n, cost });

            let min = Infinity;
            for (let i = 0; i < n; i++) {
                // Test.log();
                // Test.log({ i, n });
                const stones2 = stones.slice(0, i);
                // Test.log({ stones })
                // Test.log({ stones2 })
                let sum = 0;
                for (let j = 0; j < k; j++) {
                    // Test.log("i + j", i + j);
                    // Test.log("stones[i + j]", stones[i + j]);
                    sum += stones[i + j];
                }
                // Test.log({ sum });
                stones2.push(sum);
                for (let j = i + k; j < stones.length; j++) {
                    // console.log({ j });
                    // console.log(stones[j]);
                    stones2.push(stones[j]);
                }
                // Test.log({ stones2 });
                // min = Math.min(min, dfs(stones2, n - 1, cost + sum));
                min = Math.min(min, dfs(stones2, cost + sum));
            }
            return min;
        }
    }
};

function run(stones, k) {
    Test.run(mergeStones, stones, k);
}

run([3, 2, 4, 1], 2);
run([3, 2, 4, 1], 3);
run([3, 5, 1, 2, 6], 3);