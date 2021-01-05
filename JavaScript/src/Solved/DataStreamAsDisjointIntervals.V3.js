// https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/
var Test = require('../Common/Test');

var SummaryRanges = function () {
    this.intervals = [];
};

SummaryRanges.prototype.addNum = function (val) {
    let index = this.intervals.findIndex(interval => val <= interval[0]);
    if (index != -1 && (this.intervals[index][0] == val || (index > 0 && this.intervals[index - 1][1] == val))) return;

    index = index == -1 ? this.intervals.length : index;
    const prev = this.intervals[index - 1];
    const next = this.intervals[index];
    const differenceToNext = next ? next[0] - val : Infinity;
    const differenceToPrev = prev ? val - prev[1] : Infinity;

    if (differenceToPrev > 1) {
        if (differenceToNext == 1) {
            next[0] = val;
        }
        else {
            this.intervals.splice(index, 0, [val, val]);
        }
    }
    else {
        if (differenceToPrev == 1) {
            if (differenceToNext == 1) {
                prev[1] = next[1];
                this.intervals.splice(index, 1);
            }
            else {
                prev[1] = val;
            }
        }
    }
}

SummaryRanges.prototype.getIntervals = function () {
    return this.intervals;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

function test(ops, params) {
    Test.testWithInstructions(SummaryRanges, ops, params);
}

// test(["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"],
// [[], [1], [], [3], [], [7], [], [2], [], [6], []]);
// test(["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"],
// [[], [1], [], [3], [], [7], [], [2], [], [6], [], [8], []]);
// test(["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"],
// [[], [3], [], [7], [], [2], [], [1], [], [6], [], [8], []]);
// test(["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"],
// [[], [3], [], [7], [], [1], [], [6], [], [2], [], [8], [], [100], []]);
// test(["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"],
// [[], [6], [], [6], [], [0], [], [4], [], [8], [], [7], [], [6], [], [4], [], [7], [], [5], []])
test(["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"],
    [[], [49], [], [97], [], [53], [], [5], [], [33], [], [65], [], [62], [], [51], [], [100], [], [38], [], [61], [], [45], [], [74], [], [27], [], [64], [], [17], [], [36], [], [17], [], [96], [], [12], [], [79], [], [32], [], [68], [], [90], [], [77], [], [18], [], [39], [], [12], [], [93], [], [9], [], [87], [], [42], [], [60], [], [71], [], [12], [], [45], [], [55], [], [40], [], [78], [], [81], [], [26], [], [70], [], [61], [], [56], [], [66], [], [33], [], [7], [], [70], [], [1], [], [11], [], [92], [], [51], [], [90], [], [100], [], [85], [], [80], [], [0], [], [78], [], [63], [], [42], [], [31], [], [93], [], [41], [], [90], [], [8], [], [24], [], [72], [], [28], [], [30], [], [18], [], [69], [], [57], [], [11], [], [10], [], [40], [], [65], [], [62], [], [13], [], [38], [], [70], [], [37], [], [90], [], [15], [], [70], [], [42], [], [69], [], [26], [], [77], [], [70], [], [75], [], [36], [], [56], [], [11], [], [76], [], [49], [], [40], [], [73], [], [30], [], [37], [], [23], []]);

// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [1], [], [3], [], [7], [], [2], [], [6], []]
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [1], [], [3], [], [7], [], [2], [], [6], [], [8], []]
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [3], [], [7], [], [2], [], [1], [], [6], [], [8], []]
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [3], [], [7], [], [1], [], [6], [], [2], [], [8], [], [100], []]
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [6], [], [6], [], [0], [], [4], [], [8], [], [7], [], [6], [], [4], [], [7], [], [5], []]
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [49], [], [97], [], [53], [], [5], [], [33], [], [65], [], [62], [], [51], [], [100], [], [38], [], [61], [], [45], [], [74], [], [27], [], [64], [], [17], [], [36], [], [17], [], [96], [], [12], [], [79], [], [32], [], [68], [], [90], [], [77], [], [18], [], [39], [], [12], [], [93], [], [9], [], [87], [], [42], [], [60], [], [71], [], [12], [], [45], [], [55], [], [40], [], [78], [], [81], [], [26], [], [70], [], [61], [], [56], [], [66], [], [33], [], [7], [], [70], [], [1], [], [11], [], [92], [], [51], [], [90], [], [100], [], [85], [], [80], [], [0], [], [78], [], [63], [], [42], [], [31], [], [93], [], [41], [], [90], [], [8], [], [24], [], [72], [], [28], [], [30], [], [18], [], [69], [], [57], [], [11], [], [10], [], [40], [], [65], [], [62], [], [13], [], [38], [], [70], [], [37], [], [90], [], [15], [], [70], [], [42], [], [69], [], [26], [], [77], [], [70], [], [75], [], [36], [], [56], [], [11], [], [76], [], [49], [], [40], [], [73], [], [30], [], [37], [], [23], []]


str1 = "[null, null, [[49, 49]], null, [[49, 49], [97, 97]], null, [[49, 49], [53, 53], [97, 97]], null, [[5, 5], [49, 49], [53, 53], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [53, 53], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [53, 53], [65, 65], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [53, 53], [62, 62], [65, 65], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [51, 51], [53, 53], [62, 62], [65, 65], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [51, 51], [53, 53], [62, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [49, 49], [51, 51], [53, 53], [62, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [74, 74], [97, 97], [100, 100]], null, [[5, 5], [27, 27], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [74, 74], [97, 97], [100, 100]], null, [[5, 5], [27, 27], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [64, 65], [74, 74], [97, 97]]";
str2 = "[null, null, [[49, 49]], null, [[49, 49], [97, 97]], null, [[49, 49], [53, 53], [97, 97]], null, [[5, 5], [49, 49], [53, 53], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [53, 53], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [53, 53], [65, 65], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [53, 53], [62, 62], [65, 65], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [51, 51], [53, 53], [62, 62], [65, 65], [97, 97]], null, [[5, 5], [33, 33], [49, 49], [51, 51], [53, 53], [62, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [49, 49], [51, 51], [53, 53], [62, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [97, 97], [100, 100]], null, [[5, 5], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [74, 74], [97, 97], [100, 100]], null, [[5, 5], [27, 27], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [65, 65], [74, 74], [97, 97], [100, 100]], null, [[5, 5], [27, 27], [33, 33], [38, 38], [45, 45], [49, 49], [51, 51], [53, 53], [61, 62], [64, 65], [74, 74], [97, 97]]";

function compareResult(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i]) {
            console.log("different from position " + i + ":");
            console.log("..." + str1.slice(i));
            console.log("..." + str2.slice(i));
            break
        }
    }
    console.log("comparing completed");
}

// compareResult(str1, str2);