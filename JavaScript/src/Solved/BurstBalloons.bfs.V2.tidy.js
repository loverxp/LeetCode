// https://leetcode-cn.com/problems/burst-balloons/
var Test = require('./Common/Test');

var maxCoins = function (nums) {
    let n = nums.length;
    nums.push(1);
    nums.unshift(1);

    let states = [[nums, 0]];
    while (n-- > 0) {
        const states2 = new Map();
        for (const [nums, coins] of states) {
            for (let i = 1; i < nums.length - 1; i++) {
                const coins2 = nums[i - 1] * nums[i] * nums[i + 1] + coins;
                const nums2 = nums.slice();
                nums2.splice(i, 1);
                const key = nums2.join(',');
                if (!states2.has(key) || coins2 > states2.get(key)) {
                    states2.set(key, coins2);
                }
            }
        }
        states = Array.from(states2).map(([key, val]) => [key.split(','), val]);
    }
    return Math.max(...states.map(state => state[1]));
};

function run(nums) {
    Test.run(maxCoins, nums);
}

run([3, 1, 5, 8]);
run([[8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]]);