// https://leetcode-cn.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/
var Test = require('./Common/Test');

var closestToTarget = function (arr, target) {
    arr = [...(new Set(arr))];
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        for (let j = i; j < arr.length; j++) {
            val &= arr[j];
            if (val == target) {
                return 0;
            }
            else {
                min = Math.min(min, Math.abs(val - target));
            }
        }
    }
    return min;
};

function test(arr, target) {
    Test.test(closestToTarget, arr, target);
    // Test.test(testFor);
}


function testFor() {
    let val = 0;
    for (let i = 0; i < 10 ** 10; i++) {
        // for (let i = 0; i < 10 ** 9; i++) {
        val |= i;
    }
    console.log({ val });
}

// testFor();
// test();
test([9, 12, 3, 7, 15], 5);
test([1000000, 1000000, 1000000], 1);
test([1, 2, 4, 8, 16], 0);