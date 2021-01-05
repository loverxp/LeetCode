// https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');

var kSmallestPairs = function (nums1, nums2, k) {
    const [n1, n2] = [nums1.length, nums2.length];
    if (n1 == 0 || n2 == 0) return [];
    const heap = new Heap(([l1, r1], [l2, r2]) => nums1[l1] + nums2[r1] < nums1[l2] + nums2[r2], nums1.map((_, i) => [i, 0]));

    const result = [];
    while (k-- > 0 && heap.length) {
        let [l, r] = heap.pop();
        result.push([nums1[l], nums2[r]]);
        if (++r < n2) {
            heap.push([l, r]);
        }
    }
    return result;
};

function run(nums1, nums2, k) {
    Test.run(kSmallestPairs, nums1, nums2, k);
}

run([1, 7, 11], [2, 4, 6], 3)
run([1, 1, 2], [1, 2, 3], 2)
// run([1, 2], [3], 3)
// run([3, 5, 7, 9], [], 1);