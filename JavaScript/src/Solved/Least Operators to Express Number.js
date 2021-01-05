// https://leetcode-cn.com/problems/least-operators-to-express-number/
var Test = require('../Common/Test');

var leastOpsExpressTarget = function (x, target) {
    let y = target;
    let rank = 0;
    let power = 1;
    while (y >= x) {
        y = Math.max(y / x);
        power *= x;
        rank++;
    }

    Map.prototype.update = function (key, value) {
        if (!this.has(key) || value < this.get(key)) {
            this.set(key, value);
        }
    }

    let states = new Map();
    states.set(target, 0);
    for (let i = rank; i > 0; i--) {
        const states2 = new Map();
        for (const [target, count] of states) {
            const rem = target % power;
            const quot = (target - rem) / power;
            states2.update(rem, count + Math.min(quot * i, i + 1 + (x - quot) * i));
            states2.update(power - rem, count + Math.min(quot * i + i, i + 1 + (x - quot - 1) * i));
        }
        states = states2;
        power /= x;
    }

    let min = Infinity;
    for (const [target, count] of states) {
        min = Math.min(min, count + target * 2, count + 1 + (x - target) * 2);
    }
    return min - 1;
};

function run(x, target) {
    Test.run(leastOpsExpressTarget, x, target);
}

// run(3, 19)
// run(3, 26)
// run(5, 501)
// run(100, 100000000)

// run(5,57)
run(3, 389214789)
// run(3, 389274782)