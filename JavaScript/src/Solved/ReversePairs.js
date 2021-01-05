// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/

var Test = require('../Common/Test');


var reversePairs = function (nums) {
    if (nums.length < 2) return 0;

    return sortAndCount(nums, 0, nums.length - 1, Array(nums.length).fill());

    function sortAndCount(nums, left, right, temp) {
        if (left == right) return 0;

        let mid = Math.trunc((left + right) / 2);
        // console.log({ left, right, mid });

        let leftCount = sortAndCount(nums, left, mid, temp);
        let rightCount = sortAndCount(nums, mid + 1, right, temp);

        if (nums[mid] <= nums[mid + 1]) {
            return leftCount + rightCount;
        }

        let crossCount = mergeAndCount(nums, left, mid, right, temp);
        return leftCount + rightCount + crossCount;
    }

    function mergeAndCount(nums, left, mid, right, temp) {

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
};

function test(nums) {
    Test.test(reversePairs, nums);
}

test([7, 5, 6, 4]);
test([7, 5, 5, 6, 4]);
test([7, 5, 8, 6, 4, 5, 9, 1]);

// [7, 5, 6, 4]
// [7, 5, 5, 6, 4]
// [7, 5, 8, 6, 4, 5, 9, 1]
