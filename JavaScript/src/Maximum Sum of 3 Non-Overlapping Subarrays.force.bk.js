// https://leetcode-cn.com/problems/maximum-sum-of-3-non-overlapping-subarrays/
var Test = require('./Common/Test');

var maxSumOfThreeSubarrays = function (nums, m) {
    const n = nums.length;
    // const prefix = nums.slice(0, 1);
    const prefix = [0];
    for (let i = 0; i < n; i++) {
        // prefix.push(prefix[i - 1] + nums[i]);
        prefix.push(prefix[i] + nums[i]);
    }
    // return prefix;
    let result;
    let max = 0;
    for (let i = 0; i + 3 * m < n; i++) {
        // const sum1 = prefix[i + m - 1];
        const sum1 = prefix[i + m] - prefix[i];
        for (let j = i + m; j + 2 * m < n; j++) {
            // const sum2 = prefix[j + m - 1] + sum1;
            const sum2 = prefix[j + m] - prefix[j] + sum1;
            for (let k = j + m; k + m < n; k++) {
                // const sum3 = prefix[k + m - 1] + sum2;
                const sum3 = prefix[k + m] - prefix[k] + sum2;
                if (sum3 > max) {
                    max = sum3;
                    result = [i, j, k];
                }
            }
        }
    }
    return result;
};

function run(nums, k) {
    Test.run(maxSumOfThreeSubarrays, nums, k);
}

run([1, 2, 1, 2, 6, 7, 5, 1], 2);