// https://leetcode-cn.com/problems/product-of-array-except-self/

var Test = require('../../Common/Test');

var productExceptSelf = function (nums) {
    const leftProducts = Array(nums.length).fill(1);
    const rightProducts = Array(nums.length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i - 1];
        leftProducts[i] = leftProduct;
    }
    for (let j = nums.length - 2; j >= 0; j--) {
        rightProduct *= nums[j + 1];
        rightProducts[j] = rightProduct;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = leftProducts[i]*rightProducts[i];
    }
    return nums;
};

function test(nums) {
    Test.test(productExceptSelf, nums);
}

// test([0, 0]);
test([1, 2, 3, 4]);