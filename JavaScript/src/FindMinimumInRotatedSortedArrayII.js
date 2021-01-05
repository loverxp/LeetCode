// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
var Test = require('./Common/Test');

var findMin = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) return nums[i + 1];
    }
    // return nums[0];

    binarySearch = function (val) {
        let low = 0, high = this.nums.length - 1;
        while (low <= high) {
            const mid = Math.trunc((high + low) / 2);
            const curValue = Math.abs(this.nums[mid]);
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
};

function test(nums) {
    Test.test(findMin, nums);
}

test([1, 3, 5]);
test([2, 2, 2, 0, 1]);