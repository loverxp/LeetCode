// https://leetcode-cn.com/problems/range-module/
var Test = require('../Common/Test');

function isEven(val) {
    return val % 2 == 0;
}

function isOdd(val) {
    return !isEven(val);
}

var RangeModule = function () {
    this.ranges = [];
};

RangeModule.prototype.binarySearch = function (val) {
    let low = 0, high = this.ranges.length - 1;
    while (low <= high) {
        const mid = Math.trunc((high + low) / 2);
        const curValue = Math.abs(this.ranges[mid]);
        switch (true) {
            case val < curValue:
                high = mid - 1;
                break;
            case val > curValue:
                low = mid + 1;
                break;
            case val == curValue:
                return mid;
        }
    }
    return low;
}

RangeModule.prototype.addRange = function (left, right) {
    const startIndex = this.binarySearch(left);
    const endIndex = this.binarySearch(right);
    const insertNums = [];
    let spliceCount = endIndex - startIndex;
    if (isEven(startIndex)) {
        insertNums.push(left);
    }
    if (isEven(endIndex)) {
        if (endIndex < this.ranges.length && right == this.ranges[endIndex]) {
            spliceCount++;
        }
        else {
            insertNums.push(-right);
        }
    }
    this.ranges.splice(startIndex, spliceCount, ...insertNums);
};

RangeModule.prototype.queryRange = function (left, right) {
    const startIndex = this.binarySearch(left);
    const endIndex = this.binarySearch(right);

    if (startIndex < this.ranges.length) {
        if (isEven(startIndex)) {
            if (left == this.ranges[startIndex]) {
                return startIndex + 1 == endIndex;
            }
        }
        else {
            if (left < Math.abs(this.ranges[startIndex])) {
                return startIndex == endIndex;
            }
        }
    }
    return false;
};

RangeModule.prototype.removeRange = function (left, right) {
    const startIndex = this.binarySearch(left);
    const endIndex = this.binarySearch(right);
    const insertNums = [];
    let spliceCount = endIndex - startIndex;
    if (isOdd(startIndex)) {
        insertNums.push(-left);
    }
    if (isOdd(endIndex)) {
        if (right == Math.abs(this.ranges[endIndex])) {
            spliceCount++;
        }
        else {
            insertNums.push(right);
        }
    }
    this.ranges.splice(startIndex, spliceCount, ...insertNums);
};

function test(ops, params) {
    Test.testWithInstructions(RangeModule, ops, params);
}

// test(["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"],
// [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]);
// test(["RangeModule", "addRange", "addRange", "addRange", "queryRange", "queryRange", "queryRange", "removeRange", "queryRange"],
// [[], [10, 180], [150, 200], [250, 500], [50, 100], [180, 300], [600, 1000], [50, 150], [50, 100]]);
// test(["RangeModule", "addRange", "removeRange", "removeRange", "addRange", "removeRange", "addRange", "queryRange", "queryRange", "queryRange"],
// [[], [6, 8], [7, 8], [8, 9], [8, 9], [1, 3], [1, 8], [2, 4], [2, 9], [4, 6]]);
// test(["RangeModule", "addRange", "removeRange", "addRange"],
// [[], [6, 11], [7, 9], [7, 9]]);
test(["RangeModule", "addRange", "removeRange", "addRange", "addRange"],
    [[], [2, 11], [7, 9], [2, 7], [7, 9]]);
test(["RangeModule", "addRange", "removeRange"],
    [[], [3, 9], [7, 9]]);

// ["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]
// [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
// ["RangeModule", "addRange", "addRange", "addRange", "queryRange", "queryRange", "queryRange", "removeRange", "queryRange"]
// [[], [10, 180], [150, 200], [250, 500], [50, 100], [180, 300], [600, 1000], [50, 150], [50, 100]]
// ["RangeModule", "addRange", "removeRange", "removeRange", "addRange", "removeRange", "addRange", "queryRange", "queryRange", "queryRange"]
// [[], [6, 8], [7, 8], [8, 9], [8, 9], [1, 3], [1, 8], [2, 4], [2, 9], [4, 6]]