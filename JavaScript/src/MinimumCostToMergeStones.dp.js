// https://leetcode-cn.com/problems/minimum-cost-to-merge-stones/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

// Test.isLogOn = false;

var mergeStones = function (stones, k) {
    const n = stones.length;
    if ((n - 1) % (k - 1) != 0) return -1;

    // let sums = stones;
    let costs = Array(n).fill(0);

    // for (let len = 2 * k - 1, dpSize = n - len; len < n; len += k - 1, dpSize -= k - 1) {
    // for (let len = k, dpSize = n - len; len < n; len += k - 1, dpSize -= k - 1) {
    for (let len = k; len < n; len += k - 1) {
        // let sums2 = [], costs2 = [];
        let costs2 = [];

        let sum = 0;
        // for (let i = 0; i < k - 1; i++) {
        for (let i = 0; i < len; i++) {
            sum += stones[i];
        }
        // for (let i = 0; i < n - k; i++) {
        for (let i = 0; i < n - len; i++) {
            sum -= stones[i];
            // sum += stones[i + k];
            sum += stones[i + len];
            // sums2.push(sum);
            // dp.push([sum, sum]);        //sum, cost
        }
        // sums = sums2;
        costs = costs2;
    }

    return costs[0];
};

function run(stones, k) {
    Test.run(mergeStones, stones, k);
}

run([3, 2], 2);
run([3, 2, 4], 2);
// run([3, 2, 4, 1], 2);

// run([3, 2, 4, 1], 3);
// run([3, 5, 1, 2, 6], 3);