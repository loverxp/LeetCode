// https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums/
var Test = require('./Common/Test');
// var { PriorityQueue } = require('./Common/PriorityQueue');

class PriorityQueue {
    constructor(compare, array) {
        this.compare = compare;
        this.queue = [];
        this.length = 0;
        if (array) {
            for (const val of array) {
                this.push(val);
            }
        }
    }

    push(val) {
        const i = this.queue.findIndex((v) => this.compare(val, v));
        if (-1 == i) {
            this.queue.push(val);
        }
        else {
            this.queue.splice(i, 0, val);
        }
        this.length++;
    }

    pop() {
        this.length--;
        return this.queue.pop();
    }
}

var isPossible = function (target) {
    if (target.length == 0) return true;
    if (target.length == 1) return target[0] == 1;

    let sum = target.reduce((a, b) => a + b);
    const priorityQueue = new PriorityQueue((a, b) => a < b, target);
    Test.log({ sum, priorityQueue });

    while (true) {
        Test.log();
        Test.log("queue:", priorityQueue.queue);
        const max = priorityQueue.pop();
        if (max == 1) {
            return true;
        }
        else {
            const rest = sum - max;
            // max - (sum - max)
            // const val = (max << 1) - sum;
            // const val = max % rest;
            // const val = rest == 1 ? max - rest : max % rest;
            const val = rest == 1 ? 1 : max % rest;

            // sum = max;

            // if (val < 1) {
            if (val == max || val < 1) {
                return false;
                // break;
            }
            else {
                sum = val + rest;
                Test.log({ max, val, rest, sum });
                priorityQueue.push(val);
            }
            // if (val == 1) {

            // }
        }

    }

    return priorityQueue.queue;
};



function test(target) {
    Test.test(isPossible, target);
}

// test([1, 900000001]);
// test([900000002, 900000001]);
// test([2, 900000001]);
// test([8, 5]);
// test([9, 3, 5]);
// test([1, 1, 1, 2]);
test([1, 1, 2]);
// test([1, 1, 1, 4]);
// test([4, 7, 13, 25]);
// test([5, 9, 17, 33, 65]);
// test([20, 39, 77, 153, 305, 609, 1217, 2433, 4865, 9729, 19457, 38913, 77825, 155649, 311297, 622593, 1245185, 2490369, 4980737, 9961473]);

/*
function makeSequence(n) {
    let increment = n;
    let val = 0;
    let total = 0;
    let result = [];
    for (let i = 0; i < n; i++) {
        val = total + increment--;
        total += val;
        result.push(val);
    }
    return result;
}

function testMake(n) {
    Test.test(makeSequence, n);
}
*/

// testMake(3);
// testMake(4);
// testMake(5);
// testMake(9999);
// testMake(20);

[1, 900000001]
[900000002, 900000001]
[2, 900000001]
[1, 1, 2]
// [9, 3, 5]
// [1, 1, 1, 2]
// [1, 1, 1, 4]
// [4, 7, 13, 25]
// [5, 9, 17, 33, 65]
// [20, 39, 77, 153, 305, 609, 1217, 2433, 4865, 9729, 19457, 38913, 77825, 155649, 311297, 622593, 1245185, 2490369, 4980737, 9961473]