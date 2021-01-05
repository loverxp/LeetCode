// https://leetcode-cn.com/problems/remove-covered-intervals/
var Test = require('../Common/Test');

var removeCoveredIntervals = function (intervals) {
    const removed = Array(intervals.length).fill(false);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (removed[i]) continue;
        const [x, y] = intervals[i];
        for (let j = i + 1; j < intervals.length; j++) {
            if (removed[j]) continue;
            const [x2, y2] = intervals[j];

            if (x <= x2 && y >= y2) {
                removed[j] = true;
            }
            else if (x >= x2 && y <= y2) {
                removed[i] = true;
                break;
            }
        }
    }
    console.log('rest:', intervals.filter((_, i) => !removed[i]));
    return removed.filter(a => !a).length;
};

function test(input) {
    Test.test(removeCoveredIntervals, input);
}

test([[1, 4], [3, 6], [2, 8]]);
test([[1, 4], [3, 6], [3, 6], [3, 6], [2, 8]]);
test([[1, 4], [3, 6], [3, 7], [4, 7]]);