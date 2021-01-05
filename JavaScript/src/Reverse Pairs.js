// https://leetcode-cn.com/problems/reverse-pairs/
var Test = require('./Common/Test');

var reversePairs = function (nums) {
    if (nums.length < 2) return 0;

    const temp = Array(nums.length).fill();
    // return sortAndCount(0, nums.length - 1);
    const count = sortAndCount(0, nums.length - 1);
    console.log({ nums });
    console.log({ temp });
    return count;

    function sortAndCount(left, right) {
        if (left == right) return 0;

        const mid = Math.trunc((left + right) / 2);
        const leftCount = sortAndCount(left, mid);
        const rightCount = sortAndCount(mid + 1, right);

        // if (nums[mid] > nums[mid + 1]) {
        if (nums[mid] > nums[mid + 1] * 2) {
            return leftCount + rightCount + mergeAndCount(left, mid, right);
        }
        else {
            return leftCount + rightCount;
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
                // case temp[i] <= temp[j]:
                case temp[i] <= temp[j] * 2:
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

function run(nums) {
    Test.run(reversePairs, nums);
}

run([1, 3, 2, 3, 1]);
run([2, 4, 3, 5, 1]);