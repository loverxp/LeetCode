// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/
// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/solution/golang-er-fen-cha-zhao-by-resara-3/
var Test = require('./Common/Test');

var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b);
    let low = 0, high = nums[nums.length - 1] - nums[0];
    while (low < high) {
        let count = 0;
        let mid = low + high >> 1;
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            while (nums[i] - nums[j] > mid) j++;
            count += i - j;
        }
        if (count >= k) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
};

function run(nums, k) {
    Test.run(smallestDistancePair, nums, k);
}

function testWithTestcase(id) {
    Test.testWithTestcase(smallestDistancePair, id);
}

// run([1, 3, 1], 1);
// run([1, 3, 1], 2);
// run([1, 3, 1], 3);
// run([1, 1, 3, 1], 3);
// run([1, 1, 3, 1], 6);
// run([1, 1, 3, 1], 7);
// run([1, 3, 1], 4);
// run([62, 100, 4], 2);

// testWithTestcase(103744976);        //1
// testWithTestcase(103744976.2);        //1
// testWithTestcase(103744976.3);        //1
testWithTestcase(103873538);        //292051

// [1,3,1]
// 1
// [1,3,1]
// 2
// [1,3,1]
// 3
// [1, 1, 3, 1]
// 3
// [1, 1, 3, 1]
// 6
// [1, 1, 3, 1]
// 7
// [62, 100, 4]
// 2