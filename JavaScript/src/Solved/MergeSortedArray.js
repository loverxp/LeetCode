// https://leetcode-cn.com/problems/merge-sorted-array/
var Test = require('../Common/Test');

var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = nums1.length - 1;
    while (i >= 0 && j >= 0) {
        console.log({ i, j, k });
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    if (i < 0) {
        for (let i = 0; i <= j; i++) {
            nums1[i] = nums2[i];
        }
    }
    // console.log(nums1);
    return nums1;
};

function run(nums1, m, nums2, n) {
    Test.run(merge, nums1, m, nums2, n);
}

run([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);