// https://leetcode-cn.com/problems/3sum/
var Test = require('./Common/Test');

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const num1s = new Set();
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        const num1 = nums[i];
        if (!num1s.has(num1)) {
            num1s.add(num1);
            // const num2s = new Set();
            const usedNum2s = new Set();
            // const num3s = new Set();
            for (let j = i + 1; j < nums.length; j++) {
                const num3 = nums[j];


                // if (!num3s.has(num3)) {
                    // num3s.add(num3);
                    const num2 = - num1 - num3;
                    if (usedNum2s.has(num2)) {
                        result.push([nums[i], num2, num3]);
                    }
                    usedNum2s.add(num3);
                // }


            }
        }
    }
    return result;
};

function run(nums) {
    Test.run(threeSum, nums);
}

run([-1, 0, 1, 2, -1, -4]);
run([0, 0, 0]);
