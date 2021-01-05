// https://leetcode-cn.com/problems/create-maximum-number/
var Test = require('./Common/Test');
const { Monotone } = require('./Common/Monotone');

var maxNumber = function (nums1, nums2, k) {
    // const monotone1 = new Monotone();
    // const monotone2 = new Monotone();
    let [i, j] = [0, 0];

};

function run(nums1, nums2, k) {
    Test.run(maxNumber, nums1, nums2, k);
}

run([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)
run([6, 7], [6, 0, 4], 5)
run([3, 9], [8, 9], 3)