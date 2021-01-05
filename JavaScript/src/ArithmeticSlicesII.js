// https://leetcode-cn.com/problems/arithmetic-slices-ii-subsequence/
var Test = require('./Common/Test');

var numberOfArithmeticSlices = function (nums) {
    const maps = nums.map(_ => { });
    console.log(maps);

    for (let i = 0; i < nums.length - 1; i++) {
        // const num = nums[i];
        const prevMap = map[i];
        for (let j = 1; j < nums.length; j++) {
            const difference = nums[j] - nums[i];
            const prevDifference = prevMap[difference];
            const prevLength = prevDifference != undefined ? prevDifference : 0;

            const map = maps[j];
            if (difference in map) {
                // map[difference] 
            }
            else {

            }
            // if (!(difference in map)) {
            // map[difference] = 0;
            // }
            // map[difference]++;

        }
    }

    // for (const num of nums) {

    // }
};

/*
var numberOfArithmeticSlices = function (A) {
    return calc(A.length);
};

function calc(length) {
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
*/

function test(a) {
    Test.test(numberOfArithmeticSlices, a);
    // Test.test(calc, 111);
    // Test.test(calc, 1211);
    // Test.test(calc, 4);
    // Test.test(calc, 5);
    // Test.test(calc, 6);
    // Test.test(calc, 9);
    // Test.test(calc, 10);
    // Test.test(calc, 122211);
}

// test([2, 4, 6, 8, 10]);
// test([2, 2, 3, 4]);
test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  //55
// test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);