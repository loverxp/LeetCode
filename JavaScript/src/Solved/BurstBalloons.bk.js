// https://leetcode-cn.com/problems/burst-balloons/
var Test = require('./Common/Test');

var maxCoins = function (nums) {
    nums.push(1);
    nums.unshift(1);

    // return dfs(new Set(), 0);
    return dfs(nums, 0);

    function dfs(nums, coins) {
        Test.log();
        Test.log(used);
        Test.log(coins);
        if (nums.length == 2) {
            return coins;
        }
        else {
            let maxCoins = 0;
            for (let i = 1; i < nums.length + 1; i++) {
                if (!used.has(i)) {
                    const coins2 = nums[i - 1] * nums[i] * nums[i + 1] + coins;
                    used.add(i);
                    maxCoins = Math.max(dfs(used, coins2), maxCoins);
                    used.delete(i);
                }
            }
            return maxCoins;
        }
    }
};

function run(nums) {
    Test.run(maxCoins, nums);
}

run([3, 1, 5, 8]);