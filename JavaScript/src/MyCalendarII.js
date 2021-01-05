// https://leetcode-cn.com/problems/my-calendar-ii/
var Test = require('./Common/Test');

const between = (pos, [start, end]) => pos >= start && pos < end;

var MyCalendarTwo = function () {
    this.events = [];
};

MyCalendarTwo.prototype.book = function (start, end) {
    console.log();
    console.log(this.events);

    const interval = [start, end];
    let intersection;
    for (const interval2 of this.events) {
        console.log({ intersection });
        if (intersection) {
            if (this.isIntersected(interval2, intersection)) return false;
        }
        else {
            intersection = this.intersection(interval, interval2);
        }
    }
    this.events.push(interval);
    return true;
};

MyCalendarTwo.prototype.intersection = function (interval1, interval2) {
    if (this.isIntersected(interval1, interval2)) {
        const [start1, end1] = interval1;
        const [start2, end2] = interval2;
        return [Math.max(start1, start2), Math.min(end1, end2)];
    }
}

MyCalendarTwo.prototype.isIntersected = function (interval1, interval2) {
    const [start1, end1] = interval1;
    const [start2, end2] = interval2;
    return between(start1, interval2) || between(end1 - 1, interval2) || between(start2, interval1) || between(end2 - 1, interval1);
}

function runInSequence(ops, params) {
    Test.runWithInstructions(MyCalendarTwo, ops, params);
}

// runInSequence(["MyCalendarTwo", "book", "book", "book", "book", "book", "book"],
    // [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]);
// runInSequence(["MyCalendarTwo", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"],
    // [[], [47, 50], [1, 10], [27, 36], [40, 47], [20, 27], [15, 23], [10, 18], [27, 36], [17, 25], [8, 17], [24, 33], [23, 28], [21, 27], [47, 50], [14, 21], [26, 32], [16, 21], [2, 7], [24, 33], [6, 13], [44, 50], [33, 39], [30, 36], [6, 15], [21, 27], [49, 50], [38, 45], [4, 12], [46, 50], [13, 21]]);
runInSequence(["MyCalendarTwo", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"],
    [[], [47, 50], [1, 10], [27, 36], [40, 47], [20, 27], [15, 23], [10, 18], [27, 36], [17, 25], [8, 17]]);

// runInSequence(["MyCalendar", "book", "book", "book"],
// [[], [10, 20], [15, 25], [20, 30]]);
// runInSequence(["MyCalendar", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"],
    // [[], [97, 100], [33, 51], [89, 100], [83, 100], [75, 92], [76, 95], [19, 30], [53, 63], [8, 23], [18, 37], [87, 100], [83, 100], [54, 67], [35, 48], [58, 75], [70, 89], [13, 32], [44, 63], [51, 62], [2, 15]]);