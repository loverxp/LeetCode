// https://leetcode-cn.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
var Test = require('../Common/Test');

var minTaps = function (n, ranges) {
    let intervals = [];
    let all = [];
    for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        if (range > 0) {
            // const [left, right] = [i - range, i + range];
            const [left, right] = interval = [i - range, i + range];
            all.push(interval);
            Test.log();
            Test.log({ i, interval });
            let top = intervals[intervals.length - 1];
            // while (intervals.length && left <= intervals[intervals.length - 1][0]) {
            // while (intervals.length && (left <= intervals[intervals.length - 1][0] || ) {
            while (top && (left <= top[0] || (left <= 0 && right >= top[1]))) {
            // while (top && (left <= top[0])) {
                intervals.pop();
                top = intervals[intervals.length - 1];
            }
            if (intervals.length == 0 || right > intervals[intervals.length - 1][1]) {
                if (intervals.length >= 2 && left <= intervals[intervals.length - 2][1]) {
                    // Test.log(intervals[intervals])
                    // Test.log("??")
                    // intervals.pop();
                    Test.log("pop:", intervals.pop());

                }
                intervals.push([left, right]);
            }
            Test.log(intervals)
        }
    }
    console.log(intervals);
    console.log(all);

    if (intervals.length == 0 || intervals[0][0] > 0) {
        return -1;
    }
    else {
        let rightMost = intervals[0][1];
        let i = 1;
        // if (intervals.length > 1 && intervals[1] <= 0) {
        // }
        // else {
        // if (intervals.length == 1 || intervals[1] > 0) {
        // rightMost = intervals[0][1];
        // }
        while (rightMost < n) {
            const interval = intervals[i++];
            if (interval[0] > rightMost) {
                return -1;
            }
            else {
                rightMost = interval[1];
            }
        }
        // return i;
        Test.log({ i })
        return i > 1 && intervals[1][0] <= 0 ? i - 1 : i;

    }
};

function test(n, ranges) {
    Test.test(minTaps, n, ranges);
}

// test(5, [3, 0, 0, 1, 4, 1]);
// test(5, [3, 4, 1, 1, 0, 0]);
// test(3, [0, 0, 0, 0]);
// test(7, [1, 2, 1, 0, 2, 1, 0, 1]);
// test(8, [4, 0, 0, 0, 0, 0, 0, 0, 4]);
// test(8, [4, 0, 0, 0, 4, 0, 0, 0, 4]);
// test(7, [3, 0, 5, 4, 5, 4, 4, 3]);
// test(9, [0, 5, 0, 3, 3, 3, 1, 4, 0, 4]);
test(25, [3, 0, 1, 5, 4, 1, 4, 2, 4, 4, 3, 3, 3, 0, 3, 2, 5, 1, 5, 5, 2, 3, 1, 0, 2, 4]);

// 5
// [3,4,1,1,0,0]
// 0
// [3,4,1,1,0,0]
// 3
// [0,0,0,0]
// 7
// [1,2,1,0,2,1,0,1]
// 8
// [4,0,0,0,0,0,0,0,4]
// 8 
// [4,0,0,0,4,0,0,0,4]
// 7
// [3, 0, 5, 4, 5, 4, 4, 3]
// 9
// [0,5,0,3,3,3,1,4,0,4]
// 25
// [3, 0, 1, 5, 4, 1, 4, 2, 4, 4, 3, 3, 3, 0, 3, 2, 5, 1, 5, 5, 2, 3, 1, 0, 2, 4]