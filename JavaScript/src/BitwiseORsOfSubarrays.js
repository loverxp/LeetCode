// https://leetcode-cn.com/problems/bitwise-ors-of-subarrays/
var Test = require('./Common/Test');

var subarrayBitwiseORs = function (nums) {
    // nums = [...new Set(nums)];
    // console.log("subarrayBitwiseORs");
    const result = new Set();
    for (let i = 0; i < nums.length; i++) {
        // console.log({ i });
        let value = nums[i];
        for (let j = i; j < nums.length; j++) {
            // console.log({ j });
            result.add(value |= nums[j]);
        }
    }
    return result;
    // return result.size;
};

function test(nums) {
    Test.test(subarrayBitwiseORs, nums);
}

function testWithTestcase(id) {
    Test.testWithTestcase(subarrayBitwiseORs, id);
}

// test([1, 1, 2]);
// test([1, 2, 4]);
// test([39, 19, 30, 56, 79, 50, 19, 70, 30]);


// https://leetcode-cn.com/submissions/detail/95169323/testcase/
testWithTestcase(95169323);
