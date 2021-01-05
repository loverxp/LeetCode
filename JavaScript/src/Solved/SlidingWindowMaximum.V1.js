// https://leetcode-cn.com/problems/sliding-window-maximum/
var maxSlidingWindow = function (nums, k) {
    const maxes = [];

    if (k == 1) {
        return nums;
    }
    else {
        let max = Number.MIN_SAFE_INTEGER;
        let maxIndex = -1;
        for (let i = 0; i < nums.length - k + 1; i++) {
            if (maxIndex >= i) {
                const lastIndex = i + k - 1;
                const value = nums[lastIndex];
                if (max <= value) {
                    max = value;
                    maxIndex = lastIndex;
                }
            }
            else {
                max = Number.MIN_SAFE_INTEGER;
                for (let j = 0; j < k; j++) {
                    const lastIndex = i + j;
                    const value = nums[lastIndex];
                    if (max <= value) {
                        maxIndex = lastIndex;
                        max = value;
                    }
                }
            }
            maxes.push(max);
        }
    }
    return maxes;
};

// maxes.push(nums.reduce((a, b) => a > b ? a : b, 0));

function test1(nums, k) {
    console.log(maxSlidingWindow(nums, k));
}

test1([1, 3, -1, -3, 5, 3, 6, 7], 3);
test1([1, 3, -1, -3, 5, 3, 6, 7], 1);
test1([1], 1);
test1([1, -1], 1);
test1([7, 2, 4], 2);