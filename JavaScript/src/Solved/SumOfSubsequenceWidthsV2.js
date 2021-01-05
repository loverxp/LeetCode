// https://leetcode-cn.com/problems/sum-of-subsequence-widths/
var Test = require('../Common/Test');

var sumSubseqWidths = function (nums) {
    const mod = 1000000007;
    const length = nums.length;

    const powers = [1];
    while (powers.length < length) {
        powers.push((powers[powers.length - 1] << 1) % mod);
    }

    nums.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < length; i++) {
        total += ((powers[i] - powers[length - i - 1]) * nums[i]) % mod;
        total %= mod;
    }
    return total;
};

function test(nums) {
    Test.test(sumSubseqWidths, nums);
}

// test([2, 1, 3]);
// test([5, 4, 3, 2, 1]);
// test([6, 5, 4, 3, 2, 1, 0]);
// test([1, 2, 3, 4, 5]);
// test([7, 8, 8, 10, 4]);
test([5, 69, 89, 92, 31, 16, 25, 45, 63, 40, 16, 56, 24, 40, 75, 82, 40, 12, 50, 62, 92, 44, 67, 38, 92, 22, 91, 24, 26, 21, 100, 42, 23, 56, 64, 43, 95, 76, 84, 79, 89, 4, 16, 94, 16, 77, 92, 9, 30, 13]);

// [2, 1, 3]
// [4, 3, 2, 1]
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]
// [6, 5, 4, 3, 2, 1]
// [5, 4, 3, 2, 1, 0]
// [6, 5, 4, 3, 2, 1, 0]
// [7, 8, 8, 10, 4]
// [5, 69, 89, 92, 31, 16, 25, 45, 63, 40, 16, 56, 24, 40, 75, 82, 40, 12, 50, 62, 92, 44, 67, 38, 92, 22, 91, 24, 26, 21, 100, 42, 23, 56, 64, 43, 95, 76, 84, 79, 89, 4, 16, 94, 16, 77, 92, 9, 30, 13]

// https://leetcode-cn.com/submissions/detail/83805950/testcase/
// https://leetcode-cn.com/submissions/detail/83804748/testcase/

function test2(nums, n) {
    Test.test(function () {
        let total = 0;
        for (let i = 0; i < nums.length; i++) {
            const betweens = nums.length - i - 1;
            const combines = ((1 + betweens) * betweens) / 2 + 1;
            // const combines = 2**
            total += combines * (n - [nums[i]]);
        }
        return total;
    });
}

// test2([1, 2, 3, 4], 5);

