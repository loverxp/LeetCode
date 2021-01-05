// https://leetcode-cn.com/problems/insert-interval/
var Test = require('../Common/Test');

var insert = function (intervals, newInterval) {
    if (intervals.length == 0) return [newInterval];
    const [start, end] = newInterval;
    const ends = [];
    let startUsed = false;
    let endUsed = false;
    for (const interval of intervals) {
        interval.forEach((pos, i) => {
            if (!startUsed && start <= pos) {
                ends.push({ isLeft: true, pos: start });
                startUsed = true;
            }
            if (!endUsed && end < pos) {
                ends.push({ isLeft: false, pos: end });
                endUsed = true;
            }
            ends.push({ isLeft: i == 0, pos });
        });
    }
    if (!startUsed) {
        ends.push({ isLeft: true, pos: start });
        startUsed = true;
    }
    if (!endUsed) {
        ends.push({ isLeft: false, pos: end });
        endUsed = true;
    }

    console.log(ends);

    const result = [];
    const stack = [];
    for (const end of ends) {
        if (end.isLeft) {
            stack.push(end.pos);
        }
        else {
            const left = stack.pop();
            if (stack.length == 0) {
                result.push([left, end.pos]);
            }
        }
    }
    return result;

};

function test(intervals, newInterval) {
    Test.test(insert, intervals, newInterval);
}

// test([[1, 3], [6, 9]], [2, 5]);
// test([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]);
// test([], [5, 7]);
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