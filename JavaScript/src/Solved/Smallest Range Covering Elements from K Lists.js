// https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists/
var Test = require('../Common/Test');

class PriorityQueue {
    constructor(compare) {
        this.compare = compare;
        this.queue = [];
    }

    push(val) {
        const i = this.queue.findIndex((v) => this.compare(v, val));
        if (-1 == i) {
            this.queue.push(val);
        }
        else {
            this.queue.splice(i, 0, val);
        }
    }

    top() {
        return this.queue[this.queue.length - 1];
    }

    pop() {
        return this.queue.pop();
    }
}

var smallestRange = function (nums) {
    const n = nums.length;
    if (n == 1) return nums.length ? [nums[0][0], nums[0][0]] : [0, 0];
    const priorityQueue = new PriorityQueue(([i1, j1], [i2, j2]) => nums[i1][j1] < nums[i2][j2]);

    for (let i = 0; i < n; i++) {
        priorityQueue.push([i, 0]);
    }
    const getVal = ([i, j]) => nums[i][j];
    let [first, last] = [priorityQueue.pop(), priorityQueue.queue[0]];
    let pair = [first.slice(), last.slice()];
    let [val1, val2] = pair.map(getVal);
    let minDistance = val2 - val1;
    while (first[1] + 1 < nums[first[0]].length) {
        first[1]++;
        const val = getVal(first);
        if (val > val2) {
            val2 = val;
            last = first;
        }
        priorityQueue.push(first);
        first = priorityQueue.pop();
        const distance = val2 - getVal(first);
        if (distance < minDistance) {
            minDistance = distance;
            pair = [first.slice(), last.slice()];
        }
    }
    return pair.map(getVal);
};

function run(nums) {
    Test.run(smallestRange, nums);
}

// run([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]);
// run([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
run([[1]]);