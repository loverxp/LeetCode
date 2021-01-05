// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
var Test = require('../../Common/Test');

var countSmaller = function (nums) {
    if (nums.length < 2) return 0;

    const temp = Array(nums.length).fill();
    return sortAndCount(0, nums.length - 1);
    // sortAndCount(0, nums.length - 1);
    // return temp;
    return nums;

    function sortAndCount(left, right) {
        if (left == right) return 0;

        const mid = Math.trunc((left + right) / 2);
        const leftCount = sortAndCount(left, mid);
        const rightCount = sortAndCount(mid + 1, right);

        if (nums[mid] <= nums[mid + 1]) {
            return leftCount + rightCount;
        }
        else {
            return leftCount + rightCount + mergeAndCount(left, mid, right);
        }
    }

    function mergeAndCount(left, mid, right) {

        for (let i = left; i <= right; i++) {
            temp[i] = nums[i];
        }

        let i = left;
        let j = mid + 1;
        let count = 0;

        for (let k = left; k <= right; k++) {
            switch (true) {
                case i == mid + 1:
                    nums[k] = temp[j++];
                    break;
                case j == right + 1:
                case temp[i] <= temp[j]:
                    nums[k] = temp[i++];
                    break;
                default:
                    nums[k] = temp[j++];
                    count += (mid - i + 1);
                    break;
            }
        }
        return count;
    }
}

function test(nums) {
    Test.test(countSmaller, nums);
}

test([]);
test([5, 2, 6, 1]);