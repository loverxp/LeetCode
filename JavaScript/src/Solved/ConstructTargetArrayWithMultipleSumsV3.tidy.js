// https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums/
var Test = require('./Common/Test');
// var { Heap } = require('./Common/Heap');

class Heap {
    constructor(compare, array) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
        if (array) {
            for (const val of array) {
                this.push(val);
            }
        }
    }

    push(val) {
        if (this.tree.length == 1) {
            this.tree.push(val);
        }
        else {
            const last = this.tree.length;
            let i = last, p = Math.trunc(i / 2);
            while (i > 1 && this.compare(val, this.tree[p])) {
                this.tree[i] = this.tree[p];
                i = p;
                p = Math.trunc(i / 2);
            }
            this.tree[i] = val;
        }
        this.length++;
    }

    pop() {
        this.length--;
        const top = this.tree[1];
        const most = this.compare(1, 2) ? Infinity : -Infinity;
        const last = this.tree[this.tree.length - 1];
        let i = 1, li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = ri < this.tree.length ? this.tree[ri] : most;
            if (this.compare(last, lval) && this.compare(last, rval)) {
                break;
            }
            else {
                if (this.compare(lval, rval)) {
                    this.tree[i] = lval;
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree.pop();
        if (i != this.tree.length) {
            this.tree[i] = last;
        }
        return top;
    }
}

var isPossible = function (target) {
    if (target.length == 0) return true;
    if (target.length == 1) return target[0] == 1;

    let sum = target.reduce((a, b) => a + b);
    const heap = new Heap((a, b) => a > b, target);

    while (true) {
        const max = heap.pop();
        if (max == 1) {
            return true;
        }
        else {
            const rest = sum - max;
            const val = rest == 1 ? 1 : max % rest;
            if (val == max || val < 1) {
                return false;
            }
            else {
                sum = val + rest;
                heap.push(val);
            }
        }
    }
};

function test(target) {
    Test.test(isPossible, target);
}

function testWithTestcase(id) {
    Test.testWithTestcase(isPossible, id);
}

// test([1, 900000001]);
// test([900000002, 900000001]);
// test([2, 900000001]);
// test([8, 5]);
// test([9, 3, 5]);
// test([1, 1, 1, 2]);
// test([1, 1, 2]);
// test([1, 1, 1, 4]);
// test([4, 7, 13, 25]);
// test([5, 9, 17, 33, 65]);
// test([5, 9, 17, 33, 65, 1]);
// test([20, 39, 77, 153, 305, 609, 1217, 2433, 4865, 9729, 19457, 38913, 77825, 155649, 311297, 622593, 1245185, 2490369, 4980737, 9961473]);
test([62305, 12, 1, 1321, 1, 31153, 45, 4577, 16721, 23, 1, 1]);

// testWithTestcase(102019613);

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

// [1, 900000001]
// [900000002, 900000001]
// [2, 900000001]
// [1, 1, 2]
// [9, 3, 5]
// [1, 1, 1, 2]
// [1, 1, 1, 4]
// [4, 7, 13, 25]
// [5, 9, 17, 33, 65]
// [20, 39, 77, 153, 305, 609, 1217, 2433, 4865, 9729, 19457, 38913, 77825, 155649, 311297, 622593, 1245185, 2490369, 4980737, 9961473]