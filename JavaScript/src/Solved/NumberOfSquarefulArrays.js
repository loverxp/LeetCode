// https://leetcode-cn.com/problems/number-of-squareful-arrays/
var Test = require('../Common/Test');

var numSquarefulPerms = function (nums) {
    const isIntegral = (num) => num == Math.trunc(num);
    const isSquareful = (num1, num2) => isIntegral(Math.sqrt(num1 + num2));
    const numCounter = new Map();
    for (const num of nums) {
        if (!numCounter.has(num)) {
            numCounter.set(num, 1);
        }
        else {
            numCounter.set(num, numCounter.get(num) + 1);
        }
    }
    let left = nums.length;
    return backTracing(left);

    function backTracing(left, prevNum) {
        if (left == 0) {
            return 1;
        }
        else {
            let count = 0;
            for (const [num, numCount] of numCounter) {
                if (numCount > 0) {
                    if (prevNum == undefined || isSquareful(prevNum, num)) {
                        numCounter.set(num, numCount - 1);
                        count += backTracing(left - 1, num);
                        numCounter.set(num, numCount);
                    }
                }
            }
            return count;
        }
    }
};

function test(nums) {
    Test.test(numSquarefulPerms, nums);
}

test([1, 17, 8]);
test([2, 2, 2]);