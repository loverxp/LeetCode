// https://leetcode-cn.com/problems/chalkboard-xor-game/
var Test = require('./Common/Test');

var xorGame = function (nums) {
    let xor = nums[0];
    for (let i = 1; i < nums.length; i++) {
        xor ^= nums[i];
    }
    // return xor;

    let success = true;

    // const states = [[xor, nums]];
    let states = new Map();
    states.set(xor, new Set(nums));
    while (states.length) {
        const states2 = new Map();

        success = !success;
    }

    return success;
};

function test(nums) {
    Test.test(xorGame, nums);
}

test([1, 1, 2]);