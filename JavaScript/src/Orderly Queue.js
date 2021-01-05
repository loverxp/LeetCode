// https://leetcode-cn.com/problems/orderly-queue/
var Test = require('./Common/Test');
var { PriorityQueue } = require('./Common/PriorityQueue');

var orderlyQueue = function (s, k) {
    const n = s.length;

    const priorityQueue = new PriorityQueue((a, b) => a < b);
    // for (let i = 0; i < k; i++) {
    // priorityQueue.push(s[i]);
    // }
    let i = 0;
    while (i < k) {
        priorityQueue.push(s[i++]);
    }
    let result = "";
    // for (let i = k; i < s.length; i++) {

    // }
    // let i =k;
    // while (i < n || priorityQueue.length) {
    while (priorityQueue.length) {
        result += priorityQueue.pop();
        if (i < n) {
            priorityQueue.push(s[i++]);
        }
    }
    return result;
};

function run(s, k) {
    Test.run(orderlyQueue, s, k);
}

run("cba", 1)
run("baaca", 3)
run("fedcba", 1)
run("fedcba", 3)