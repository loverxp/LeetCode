// https://leetcode-cn.com/problems/triples-with-bitwise-and-equal-to-zero/
var Test = require('../Common/Test');

var countTriplets = function (nums) {
    const multiples = [0, 1, 3, 6];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                count++;
            }
        }
    }
    return count;
};

function test(nums) {
    Test.test(countTriplets, nums);
}

test([2, 1, 3]);