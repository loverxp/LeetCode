// https://leetcode-cn.com/problems/my-calendar-iii/
var Test = require('./Common/Test');

var MyCalendarThree = function () {
    this.events = [];
    this.k = 0;
};

MyCalendarThree.prototype.book = function (start, end) {
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

    console.log(this.events);
    console.log({ l });

    let k = 1;
    if (l != -1) {
        for (let i = l - 1; i >= 0 && this.events[i] > 0; i--) { k++; }
        console.log({ k });
        for (let i = l + 1; i < this.events.length && this.events[i] > 0; i++) {
            console.log({ i });
            console.log("event:", this.events[i]);
            k++;
        }
        // for (let i = l - 1; i >= 0 && this.events[i] > 0; i--, k++);
        // for (let i = l + 1; i < this.events.length && this.events[i] > 0; i++, k++);
    }
    console.log({ k });

    this.k = Math.max(k, this.k);
    return this.k;
};

function runInSequence(ops, params) {
    Test.runWithInstructions(MyCalendarThree, ops, params);
}

runInSequence(["MyCalendarThree", "book", "book", "book", "book", "book", "book"],
    [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]);
// runInSequence(["MyCalendarThree", "book", "book", "book", "book", "book", "book", "book"],
    // [[], [10, 20], [20, 30], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]);