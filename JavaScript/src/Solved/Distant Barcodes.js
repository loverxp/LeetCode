// https://leetcode-cn.com/problems/distant-barcodes/
var Test = require('../Common/Test');

var rearrangeBarcodes = function (nums) {
    let counter = new Map();
    for (const num of nums) {
        if (!counter.has(num)) {
            counter.set(num, 1);
        }
        else {
            counter.set(num, counter.get(num) + 1);
        }
    }
    counter = [...counter].sort((a, b) => b[1] - a[1]);
    console.log({ counter });
    const n = nums.length;
    let result = [];
    let i = 0;
    for (let [num, count] of counter) {
        while (count-- > 0) {
            result[i] = num;
            if ((i += 2) >= n) i = 1;
        }
    }
    return result;
}

function run(nums) {
    Test.run(rearrangeBarcodes, nums);
}

// run([1, 1, 1, 2, 2, 2]);
// run([1, 1, 1, 1, 2, 2, 3, 3]);
run([2, 1, 1]);