// https://leetcode-cn.com/problems/burst-balloons/
var Test = require('../Common/Test');

var maxCoins = function (nums) {
    let n = nums.length;
    nums.push(1);
    nums.unshift(1);

    let states = [[nums, 0]];
    while (n-- > 0) {
        Test.log()
        Test.log(states);
        const states2 = [];
        for (const [nums, coins] of states) {
            for (let i = 1; i < nums.length - 1; i++) {
                const coins2 = nums[i - 1] * nums[i] * nums[i + 1] + coins;
                const nums2 = nums.slice();
                nums2.splice(i, 1);
                states2.push([nums2, coins2]);
            }
        }
        states = states2;
    }
    return Math.max(...states.map(state => state[1]));
};

function run(nums) {
    Test.run(maxCoins, nums);
}

run([3, 1, 5, 8]);
// run([3, 1, 5]);
// run([3, 2, 5]);


// [ [ 1, 3, 5, 8, 1 ], 15 ],
// [ [ 1, 3, 1, 8, 1 ], 40 ],
// [ [ 1, 3, 8, 1 ], 135 ],
// [ [ 1, 3, 8, 1 ], 64 ],
