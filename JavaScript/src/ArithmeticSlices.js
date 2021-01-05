// https://leetcode-cn.com/problems/arithmetic-slices/
var Test = require('./Common/Test');

var numberOfArithmeticSlices = function (A) {
    const length = A.length;
    let result = 0;
    for (let i = 3, isOdd = true; i <= length; i++, isOdd = !isOdd) {
        if (i == 3) {
            result = 1;
        }
        else {
            let plus = 0;
            const start = isOdd ? (i - 1) / 2 : i / 2;
            for (let j = start; j >= 2; j--) {
                plus += Math.trunc((i - 1) / j) - 1;
            }
            result += (i - 2) + plus;
        }
    }
    return result;
}

function test(nums) {
    Test.test(numberOfArithmeticSlices, nums);
}

test([1, 2, 3, 4, 5, 6]);
test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
test([2, 2, 3, 4]);
test([2, 4, 6, 8, 10]);

// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [2, 2, 3, 4]
// [2, 4, 6, 8, 10]
