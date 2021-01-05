// https://leetcode-cn.com/problems/sum-swap-lcci/
var Test = require('./Common/Test');

var findSwapValues = function (array1, array2) {
    const sum1 = array1.reduce((sum, num) => sum + num, 0);
    const sum2 = array2.reduce((sum, num) => sum + num, 0);
    let diff = sum1 - sum2;
    if (diff % 2 == 0) {
        diff /= 2;
        const set = new Set(array2);
        for (const num of array1) {
            if (set.has(num - diff)) {
                return [num, num - diff];
            }
        }
    }
    return [];
};

function test(array1, array2) {
    Test.test(findSwapValues, array1, array2);
}

test([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]);
test([1, 2, 3], [4, 5, 6]);