// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

var Test = require('./Common/Test');

var findMedianSortedArrays = function (nums1, nums2) {

    const n = nums1.length + nums2.length;
    const midIndex = n % 2 == 0 ? [n / 2 - 1, n / 2] : [Math.trunc(n / 2)];

    let low1 = 0, low2 = 0, high1 = nums1.length - 1, hight2 = nu2.length;
    // let mid1, mid2;

    while (low1 <= high1 && low2 <= hight2) {
        const mid1 = Math.trunc((low1 + high1) / 2);
        const mid2 = Math.trunc((low2 + high2) / 2);
        const value1 = nums1[mid1];
        const value2 = nums2[mid2];

        if (value1 < value2) {

        }
        else if (value1 > value2) {

        }
        // switch (true) {
        //     case value1 < value2:
        //         break;
        //     case value1 > value2:
        //         break;
        //     case value1 == value2:
        //         console.log({ mid1, mid2 });
        //         break;
        // }

    }

    // function binarySearch(nums1, nums2) {

    // }
    /*
    function binarySearch(val) {
        let low = 0, high = this.ranges.length - 1;
        while (low <= high) {
            const mid = Math.trunc((high + low) / 2);
            const curValue = Math.abs(this.ranges[mid]);
            switch (true) {
                case val < curValue:
                    high = mid - 1;
                    break;
                case val > curValue:
                    low = mid + 1;
                    break;
                case val == curValue:
                    return mid;
            }
        }
        return low;
    }
    */
};

function test(nums1, nums2) {
    Test.test(findMedianSortedArrays, nums1, nums2);
}

test([1, 3], [2]);
test([1, 2], [3, 4]);
// test([],
    // []);