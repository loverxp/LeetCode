// https://leetcode-cn.com/problems/split-array-with-same-average/
var Test = require('./Common/Test');

var splitArraySameAverage = function (nums) {
    const n = nums.length;
    if (n < 2) return false;
    const sum = nums.reduce((a, b) => a + b);
    console.log({ n, sum });
    const memo = Array.from({ length: n }, () => new Map());
    console.log({ memo });

    return dfs(0, 0, 0);

    function dfs(total, start, count) {
        if (count == n) return false;
        if (count > 0 && total * n == sum * count) return true;
        if (!memo[start].has(total)) {
            memo[start].set(total, true);
            for (let i = start; i < n - 1; i++) {
                if (dfs(total + nums[i], i + 1, count + 1)) return true;
            }
            memo[start].set(total, false);
            return false;
        }
        else {
            return memo[start].get(total);
        }
    }
};

function run(nums) {
    Test.run(splitArraySameAverage, nums);
}

// run([1, 2, 3, 4, 5, 6, 7, 8]);
// run([4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 5]);
run([60, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30])

// run([6538, 8025, 2005, 2560, 7431, 6411, 295, 7442, 577, 6160, 5311, 9605, 1374, 6279, 7556, 5041, 5343, 1352, 2825, 5559, 4280]);
// run([1203, 6409, 4151, 9341, 6087, 6542, 1011, 3297, 5538, 2315, 9729, 3644, 6603, 7732, 7441, 8537, 3338, 4959, 6148, 3193, 3623, 8708, 865, 1685, 5035, 6341, 9627])


function randomTest() {
    const n = Math.trunc(Math.random() * 30);
    const nums = Array.from({ length: n }, () => Math.trunc(Math.random() * 10000));
    console.log({ n, nums });
    run(nums);
}

// randomTest();

// [6538, 8025, 2005, 2560, 7431, 6411, 295, 7442, 577, 6160, 5311, 9605, 1374, 6279, 7556, 5041, 5343, 1352, 2825, 5559, 4280]
// [1203, 6409, 4151, 9341, 6087, 6542, 1011, 3297, 5538, 2315, 9729, 3644, 6603, 7732, 7441, 8537, 3338, 4959, 6148, 3193, 3623, 8708, 865, 1685, 5035, 6341, 9627]