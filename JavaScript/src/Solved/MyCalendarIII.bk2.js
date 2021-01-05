// https://leetcode-cn.com/problems/my-calendar-iii/
var Test = require('./Common/Test');

var MyCalendarThree = function () {
    this.events = [];
    this.k = 1;
};

MyCalendarThree.prototype.book = function (start, end) {
    const log = (...args) => { if (start == 25) { console.log(...args); } };

    log(this.events);

    const l = this.events.findIndex(event => start < Math.abs(event));
    if (l == -1) {
        this.events.push(start);
    }
    else {
        this.events.splice(l, 0, start);
    }
    const r = this.events.findIndex(event => end <= Math.abs(event));
    if (r == -1) {
        this.events.push(-end);
    }
    else {
        this.events.splice(r, 0, -end);
    }

    log(this.events);
    log({ l });
    if (l != -1) {
        let k = 1;
        for (let i = l - 1; i >= 0 && this.events[i] > 0; i--, k++);
        for (let i = l + 1; i < this.events.length && this.events[i] > 0; i++, k++);
        log({ k });
        this.k = Math.max(k, this.k);
    }
    return this.k;
};

function runInSequence(ops, params) {
    Test.runWithInstructions(MyCalendarThree, ops, params);
}

// runInSequence(["MyCalendarThree", "book", "book", "book", "book", "book", "book"],
// [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]);
// runInSequence(["MyCalendarThree", "book", "book", "book", "book", "book", "book", "book"],
// [[], [10, 20], [20, 30], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]);
runInSequence(["MyCalendarThree", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"],
    [[], [24, 40], [43, 50], [27, 43], [5, 21], [30, 40], [14, 29], [3, 19], [3, 14], [25, 39], [6, 19]]);