// https://leetcode-cn.com/problems/my-calendar-i/
var Test = require('../Common/Test');

var MyCalendar = function () {
    this.events = [];
};

MyCalendar.prototype.book = function (start, end) {
    const interval = [start, end];
    for (const interval2 of this.events) {
        if (this.isIntersected(interval, interval2)) return false;
    }
    this.events.push(interval);
    return true;
};

MyCalendar.prototype.isIntersected = function (interval1, interval2) {
    const [start1, end1] = interval1;
    const [start2, end2] = interval2;
    const between = (pos, [start, end]) => pos >= start && pos < end;
    return between(start1, interval2) || between(end1 - 1, interval2) || between(start2, interval1) || between(end2 - 1, interval1);
}

function runInSequence(ops, params) {
    Test.runWithInstructions(MyCalendar, ops, params);
}

// runInSequence(["MyCalendar", "book", "book", "book"],
// [[], [10, 20], [15, 25], [20, 30]]);
runInSequence(["MyCalendar", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"],
    [[], [97, 100], [33, 51], [89, 100], [83, 100], [75, 92], [76, 95], [19, 30], [53, 63], [8, 23], [18, 37], [87, 100], [83, 100], [54, 67], [35, 48], [58, 75], [70, 89], [13, 32], [44, 63], [51, 62], [2, 15]]);