// https://leetcode-cn.com/problems/bitwise-ors-of-subarrays/
var Test = require('./Common/Test');

var subarrayBitwiseORs = function (nums) {
    const result = new Set();

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        for (let j = i; j < nums.length; j++) {
            result.add(value |= nums[j]);
        }
    }
    return result.size;
};

function test(nums) {
    Test.test(subarrayBitwiseORs, nums);
}

function testWithTestcase(id) {
    Test.testwithTestcase(subarrayBitwiseORs, id);
}
// test([1, 1, 2]);
// test([1, 2, 4]);
// test([39, 19, 30, 56, 79, 50, 19, 70, 30]);
test([13,4,2])

// testwithTestcase(95169323);