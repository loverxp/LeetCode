// https://leetcode-cn.com/problems/insert-interval/
var Test = require('../Common/Test');

var insert = function (intervals, newInterval) {
    const [start, end] = newInterval;
    const result = [];
    const stack = [];
    let startUsed = false;
    let endUsed = false;
    for (const interval of intervals) {
        interval.forEach((pos, i) => {
            if (!startUsed && start <= pos) {
                stack.push(start);
                startUsed = true;
            }
            if (!endUsed && end < pos) {
                popEnd(end);
                endUsed = true;
            }
            if (i == 0) {
                stack.push(pos);
            }
            else {
                popEnd(pos);
            }
        });
    }
    if (!startUsed) {
        stack.push(start);
    }
    if (!endUsed) {
        popEnd(end);
    }

    return result;

    function popEnd(end) {
        const left = stack.pop();
        if (stack.length == 0) {
            result.push([left, end]);
        }
    }
};

function test(intervals, newInterval) {
    Test.test(insert, intervals, newInterval);
}

test([[1, 3], [6, 9]], [2, 5]);
test([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]);
test([], [5, 7]);
test([[1, 5]], [2, 7]);
test([[1, 5]], [5, 7]);

// [[1, 3], [6, 9]]
// [2, 5]
// [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
// [4, 8]
// []
// [5,7]
// [[1, 5]]
// [2, 7]