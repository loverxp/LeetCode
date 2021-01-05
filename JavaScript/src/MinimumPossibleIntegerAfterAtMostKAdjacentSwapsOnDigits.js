// https://leetcode-cn.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/
var Test = require('./Common/Test');
var { PriorityQueue } = require('./Common/PriorityQueue');

class NumCounter {
    constructor() {
        this.counter = new Map();
        // this.pq = new PriorityQueue();
    }

    add(i, num) {
        if (!this.counter.has(num)) {
            // counter.set(num, new Set());
            this.counter.set(num, []);
        }
        // counter.get(num).add(i);
        this.counter.get(num).push(i);
    }

    pop(){

    }
}

var minInteger = function (num, k) {
    const nums = num.split('');
    let n = nums.length;

    const pq = new PriorityQueue((i1, i2) => nums[i1] > nums[i2]);
    for (let i = 0; i < n; i++) {
        pq.push(i);
    }
    return pq;
    // return pq.queue;

    const swapLength = Math.min(n, k);

    const counter = new Map();
    // for (let i = 0; i < Math.min(n, k); i++) {
    // for (let i = 0; i < Math.min(n, k) - 1; i++) {
    for (let i = 0; i < swapLength - 1; i++) {
        // countNum(nums[i]);
        countNum(i);
    }

    for (let i = 0; i < n && k > 0; i++, k -= n - i) {

        const newNumI = swapLength + i;
        if (newNumI < n) {
            countNum[newNumI];
            // countNum(nums[newNumI],)
        }
        // let newNum


    }

    // for (let i = n; i > 0 && k > 0; i--, k -= i) {
    // for (let i = n; i > 0 && k > 0; i--, k -= i) {

    // }

    return nums.join('');

    // function countNum(num, i) {
    function countNum(i) {
        const num = nums[i];
        if (!counter.has(num)) {
            // counter.set(num, new Set());
            counter.set(num, []);
        }
        // counter.get(num).add(i);
        counter.get(num).push(i);
    }
};


function run(num, k) {
    Test.run(minInteger, num, k);
}

run("4321", 4);
run("100", 1);
run("36789", 1000);
run("22", 22);
run("9438957234785635408", 23);