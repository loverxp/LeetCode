// https://leetcode-cn.com/problems/remove-boxes/
var Test = require('./Common/Test');


var removeBoxes = function (boxes) {
    const n = boxes.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Array.from({ length: n }, () => 0)));
    return remove(0, n - 1, 0);

    function remove(l, r, k) {
        if (l > r) return 0;
        if (dp[l][r][k]) return dp[l][r][k];
        dp[l][r][k] = remove(l, r - 1, 0) + (k + 1) ** 2;
        for (let i = l; i < r; i++) {
            if (boxes[i] == boxes[r]) {
                dp[l][r][k] = Math.max(dp[l][r][k], remove(l, i, k + 1) + remove(i + 1, r - 1, 0));
            }
        }
        return dp[l][r][k];
    }
}

function test(boxes) {
    Test.test(removeBoxes, boxes);
}

// test([1]);
// test([1, 1]);
// test([1, 2, 1]);
test([1, 2, 3, 2]);

// test([1, 3, 2]);
// test([1, 3, 2, 2]);
// test([1, 2, 3, 2, 2]);
// test([1, 3, 2, 2, 2]);
// test([2, 1, 2, 3, 2, 2]);
// test([1, 3, 2, 2, 2, 2]);

// test([1, 3, 2, 2, 2, 3, 4, 3, 1]);
// test([1, 3, 2, 2, 2, 3]);
// test([1, 3, 2]);
// test([1, 1, 1]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10, 7]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3 ]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6]);
