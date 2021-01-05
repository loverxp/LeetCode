// https://leetcode-cn.com/problems/patching-array/
var Test = require('./Common/Test');

var minPatches = function (nums, n) {
    let sums = new Set([0]);
    for (const num of nums) {
        const sums2 = new Set(sums);
        for (const sum of sums) {
            if (sum + num <= n) {
                sums2.add(sum + num);
            }
        }
        sums = sums2;
    }
    nums = new Set(nums);

    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (!sums.has(i)) {
            count++;
            const sums2 = new Set();
            for (const sum of sums) {
                if (sum >= i * 2) {
                    sums2.add(sum);
                }
                const sum2 = sum + i;
                if (sum2 >= i * 2 && sum2 <= n) {
                    sums2.add(sum2);
                }
            }
            sums = sums2;
            i *= 2;
            i -= 1;
        }
        else {
            if (nums.has(i)) {
                i *= 2;
                i -= 1;
            }
        }
    }
    return count;
};

function run(nums, n) {
    Test.run(minPatches, nums, n);
}

// run([1, 3], 6)
// run([1, 5, 10], 20)
// run([1, 2, 3, 8], 80)
// run([1, 2, 2], 5)
run([1, 2, 31, 33], 2147483647);
// run([1, 2, 31, 33], 214748);
// run([1, 2, 31, 33], 1748);