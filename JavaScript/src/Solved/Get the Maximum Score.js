// https://leetcode-cn.com/problems/get-the-maximum-score/
var Test = require('../Common/Test');

var maxSum = function (nums1, nums2) {
    const mod = 1e9 + 7;
    const [m, n] = [nums1.length, nums2.length];
    let max1 = 0, max2 = 0;
    let i = 0, j = 0;
    while (i < m && j < n) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        if (num1 == num2) {
            const max = Math.max(max1 + num1, max2 + num2);
            max1 = max2 = max;
            i++;
            j++;
        }
        else {
            if (num1 < num2) {
                max1 += num1;
                i++;
            }
            else {
                max2 += num2;
                j++;
            }
        }
    }
    while (i < m) {
        max1 += nums1[i++];
        // max1 %= mod;
    }
    while (j < n) {
        max2 += nums2[j++];
        // max2 %= mod;
    }
    return Math.max(max1, max2) % mod;
    // return max1;
    // return max1 % mod;
};

function run(nums1, nums2) {
    Test.run(maxSum, nums1, nums2);
}

function testWithTestcase(id) {
    Test.testWithTestcase(maxSum, id);
}

// run([2, 4, 5, 8, 10], [4, 6, 8, 9])
// run([1, 3, 5, 7, 9], [3, 5, 100])
// run([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
// run([1, 4, 5, 8, 9, 11, 19], [2, 3, 4, 11, 12])
testWithTestcase(104807690);