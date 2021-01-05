// https://leetcode-cn.com/problems/minimum-cost-to-hire-k-workers/
var Test = require('./Common/Test');
// var { Heap } = require('./Common/Heap');

var mincostToHireWorkers = function (quality, wage, K) {
    const n = quality.length;
    const ratio = [];
    for (let i = 0; i < n; i++) {
        ratio.push(quality[i] / wage[i]);
    }
    return ratio;
}

function run(quality, wage, K) {
    Test.run(mincostToHireWorkers, quality, wage, K);
}

// run([10, 20, 5], [70, 50, 30], 2);
// run([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3);
// run([2, 2, 4], [4, 3, 7], 2);
// run([4, 3, 7], [2, 2, 4], 2);

run([100, 4, 20], [2, 2, 4], 2);            //[1,2] 2 + 10
run([100, 20, 20], [2, 2, 4], 2);           //[1,2] 4 + 4
run([100, 50, 10, 5], [2, 2, 4, 4], 2);     //[0,1] 4 + 2
run([100, 50, 20, 10, 20, 10], [2, 2, 4, 4, 1, 1], 2);     //[4,5] 2 + 1
run([100, 20, 40], [1, 2, 4], 2);           //[1,2] 2 + 4
run([100, 20, 40, 60], [1, 2, 4, 6], 2);    //[1,2] 2 + 4

run([8, 4, 2, 1], [1, 2, 4, 8], 2);

run([1, 100, 4], [1, 2, 4], 2);
run([10, 1, 40], [1, 2, 4], 2);