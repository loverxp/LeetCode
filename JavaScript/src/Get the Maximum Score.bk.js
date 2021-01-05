// https://leetcode-cn.com/problems/get-the-maximum-score/
var Test = require('./Common/Test');

var maxSum = function (nums1, nums2) {
    const [m, n] = [nums1.length, nums2.length];
    let i = 0, j = 0;
    // const commons = [];
    const commons = new Map();
    while (i < m && j < n) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        if (num1 == num2) {
            // commons.push([i++, j++]);
            commons.set(num1, [i++, j++]);
        }
        else {
            if (num1 < num2) {
                i++;
            }
            else {
                j++;
            }
        }
    }
    // return commons;
    // const dp1 = Array(m).fill();
    // const dp2 = Array(n).fill();
    const dp1 = Array(m + 1).fill();
    const dp2 = Array(n + 1).fill();
    dp1[0] = 0;
    dp2[0] = 0;
    i = 0, j = 0;
    while (true) {
        while (i < m && !commons.has(nums1[i])) {
            dp1[i + 1] = dp1[i] + nums1[i++];
        }

        while (j < n && !commons.has(nums2[j])) {
            dp2[j + 1] = dp2[j] + nums2[j++];
        }
    }
    // return Math.max(dp1[m - 1], dp2[n - 1]);
    return Math.max(dp1[m], dp2[n]);
};

function run(nums1, nums2) {
    Test.run(maxSum, nums1, nums2);
}

run([2, 4, 5, 8, 10], [4, 6, 8, 9])
run([1, 3, 5, 7, 9], [3, 5, 100])
run([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
run([1, 4, 5, 8, 9, 11, 19], [2, 3, 4, 11, 12])