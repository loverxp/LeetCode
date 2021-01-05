// https://leetcode-cn.com/problems/triples-with-bitwise-and-equal-to-zero/
var Test = require('../Common/Test');

var countTriplets = function (nums) {
    const multiples = [0, 1, 3, 6];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            for (let k = j; k < nums.length; k++) {
                if ((nums[i] & nums[j] & nums[k]) == 0) {
                    count += multiples[new Set([i, j, k]).size];
                }
            }
        }
    }
    return count;
};

function test(nums) {
    Test.test(countTriplets, nums);
}

test([2, 1, 3]);