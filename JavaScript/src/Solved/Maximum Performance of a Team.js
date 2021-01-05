// https://leetcode-cn.com/problems/maximum-performance-of-a-team/
var Test = require('../Common/Test');

class Heap {
    constructor(compare) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
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
        const last = this.tree[this.tree.length - 1];
        let i = 1, li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = this.tree[ri];
            if (this.compare(last, lval) && (rval == undefined || this.compare(last, rval))) {
                break;
            }
            else {
                if (rval == undefined || this.compare(lval, rval)) {
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

var maxPerformance = function (n, speeds, efficiencies, k) {
    console.log({ n });
    const mod = 1e9 + 7;
    const keys = [...efficiencies.keys()].sort((i, j) => efficiencies[j] - efficiencies[i]);
    const topSpeeds = new Heap((i, j) => speeds[i] < speeds[j]);
    let performance = 0;
    let sumSpeed = 0;
    for (let i = 0; i < n; i++) {
        const ii = keys[i];
        topSpeeds.push(ii);
        sumSpeed += speeds[ii];
        performance = Math.max(performance, efficiencies[ii] * sumSpeed);
        if (topSpeeds.length == k) {
            sumSpeed -= speeds[topSpeeds.pop()];
        }
    }
    // return performance;
    return performance % mod;
};

function run(n, speed, efficiency, k) {
    Test.run(maxPerformance, n, speed, efficiency, k);
}

function testWithTestcase(id) {
    Test.testWithTestcase(maxPerformance, id);
}


// run(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2)
// run(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3)
// run(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4)
// run(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 6)
// run(3, [2, 8, 2], [2, 7, 1], 2)
// run(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3)

// testWithTestcase(106135257);
// testWithTestcase(106137632);
// testWithTestcase(106148845);
// testWithTestcase(106150893);