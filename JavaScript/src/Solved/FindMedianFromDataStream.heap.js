// https://leetcode-cn.com/problems/find-median-from-data-stream/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');

var MedianFinder = function () {
    this.heapSize = 0;
    this.minHeap = new Heap((a, b) => a < b);
    this.maxHeap = new Heap((a, b) => a > b);
    this.median;
};

MedianFinder.prototype.addNum = function (num) {
    if (this.heapSize == 0 || (num >= this.maxHeap.top() && num <= this.minHeap.top())) {
        if (undefined != this.median) {
            this.heapSize++;
            this.maxHeap.push(Math.min(num, this.median));
            this.minHeap.push(Math.max(num, this.median));
            delete this.median;
        }
        else {
            this.median = num;
        }
    }
    else {
        let heap1, heap2;
        switch (true) {
            case num < this.maxHeap.top():
                heap1 = this.maxHeap;
                heap2 = this.minHeap;
                break;

            case num > this.minHeap.top():
                heap1 = this.minHeap;
                heap2 = this.maxHeap;
                break;
        }
        heap1.push(num);
        if (undefined != this.median) {
            this.heapSize++;
            heap2.push(this.median);
            delete this.median;
        }
        else {
            this.median = heap1.pop();
        }
    }
};

MedianFinder.prototype.findMedian = function () {
    if (undefined != this.median) {
        return this.median;
    }
    else {
        return (this.maxHeap.top() + this.minHeap.top()) / 2;
    }
};

function test(ops, params) {
    Test.testWithInstructions(MedianFinder, ops, params);
}

test(["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
    [[], [1], [2], [], [3], []]);