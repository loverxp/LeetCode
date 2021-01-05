// https://leetcode-cn.com/problems/chalkboard-xor-game/
var Test = require('./Common/Test');

var xorGame = function (nums) {
    let xor = nums[0];
    for (let i = 1; i < nums.length; i++) {
        xor ^= nums[i];
    }

    console.log({ xor });

    let dp = nums.map(num => xor ^ num);

    // return dp;


};

function test(nums) {
    Test.test(xorGame, nums);
}

test([1, 1, 2]);