// https://leetcode-cn.com/problems/minimum-cost-to-connect-two-groups-of-points/
var Test = require('./Common/Test');

var connectTwoGroups = function (cost) {
    const [m, n] = [cost.length, cost[0].length];
    const lMasks = Array(m).fill(0);
    const rMasks = Array(n).fill(0);

    let sum = 0;
    for (let j = 0; j < n; j++) {
        lMasks[0] ^= 1 << j;
        rMasks[j] ^= 1;
        sum += cost[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
        }
    }

    return { sum, lMasks, rMasks }
};

function run(cost) {
    Test.run(connectTwoGroups, cost);
}

run([[15, 96], [36, 2]])
run([[1, 3, 5], [4, 1, 1], [1, 5, 3]])
run([[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]])