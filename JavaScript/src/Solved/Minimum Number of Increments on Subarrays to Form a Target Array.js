// https://leetcode-cn.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/
var Test = require('../Common/Test');
// var { Monotone } = require('./Common/Monotone');

class MonotoneStack extends Array {
    push(item) {
        while (this.length && (item <= this.last())) {
            this.pop();
        }
        return super.push(item);
    }

    last() {
        return this[this.length - 1];
    }
}

var minNumberOperations = function (nums) {
    nums.push(0);
    const monotone = new MonotoneStack();
    monotone.push(0);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cur <= monotone.last()) {
            count += monotone.last() - cur;
            while (cur <= monotone.last()) {
                monotone.pop();
            }
        }
        monotone.push(cur);
    }
    return count;
}

function run(target) {
    Test.run(minNumberOperations, target);
}

run([1, 2, 3, 2, 1])
run([3, 1, 1, 2])
run([3, 1, 5, 4, 2])
run([1, 1, 1, 1])

// run([5, 4, 3, 2, 1])
// run([1, 3, 2])
// run([4, 3, 2])
run([4, 3, 2, 1])
// run([1, 3, 4, 2])
// run([2, 4, 3, 1])

// run([1]);
// run([1, 1]);
// run([1, 2, 1]);
// run([1, 2, 3, 2]);

// run([1, 3, 2]);
// run([1, 3, 2, 2]);
// run([1, 2, 3, 2, 2]);
// run([1, 3, 2, 2, 2]);
// run([2, 1, 2, 3, 2, 2]);
// run([1, 3, 2, 2, 2, 2]);

run([1, 3, 2, 2, 2, 3, 4, 3, 1]);
// run([1, 3, 2, 2, 2, 3]);
// run([1, 3, 2]);
// run([1, 1, 1]);
run([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10, 7]);
run([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3 ]);
// run([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2]);
// run([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8]);
// run([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6]);