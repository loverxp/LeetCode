// https://leetcode-cn.com/problems/burst-balloons/
var Test = require('./Common/Test');

var maxCoins = function (nums) {
    nums.push(1);
    nums.unshift(1);
    const memo = new Map();
    return solve(0, nums.length - 1);

    function solve(l, r) {
        console.log();
        console.log({ l, r });
        if (l + 1 == r) {
            console.log(0);
            return 0;
        }
        else {
            const key = `${l},${r}`;
            if (!memo.has(key)) {
                let max = 0;
                for (let i = l + 1; i < r; i++) {
                    max = Math.max(max, nums[i] * nums[l] * nums[r] + solve(l, i) + solve(i, r));
                }
                memo.set(key, max);
            }
            console.log(memo.get(key));
            return memo.get(key);
        }
    }
};

function run(nums) {
    Test.run(maxCoins, nums);
}

run([3, 5]);
// run([3, 1, 5]);
// run([3, 1, 5, 8]);
// run([8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]);
// run([8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6]);
// run([8, 3, 4, 3, 5, 0, 5 ]);