// https://leetcode-cn.com/problems/longest-consecutive-sequence/

var Test = require('../Common/Test');

var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let maxLength = 1;
    for (const value of set) {
        if (!set.has(value - 1)) {
            console.log({ value });
            let next = value;
            while (set.has(++next));
            maxLength = Math.max(maxLength, next - value);
        }
    }
    return maxLength;
};

function test(nums) {
    Test.test(longestConsecutive, nums);
}

// test([100, 4, 200, 1, 3, 2]);
test([100, 4, 200, 1, 3, 4, 2]);
test([]);