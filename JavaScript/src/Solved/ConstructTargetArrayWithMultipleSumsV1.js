// https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums/
var Test = require('./Common/Test');

var isPossible = function (target) {
    if (target.length == 0) return true;
    if (target.length == 1) return target[0] == 1;
    const numSet = new Set(target);
    numSet.delete(1);
    const min = Math.min(...numSet);
    console.log({ min });

    let val = target.length;
    for (let i = 0; i < numSet.size; i++) {
        if (!numSet.has(val)) return false;
        val *= 2;
        val--;
    }
    return true;
};



function test(target) {
    Test.test(isPossible, target);
}

test([8, 5]);
test([9, 3, 5]);
// test([1, 1, 1, 2]);
// test([1, 1, 1, 4]);
test([4, 7, 13, 25]);
// test([5, 9, 17, 33, 65]);
// test([20, 39, 77, 153, 305, 609, 1217, 2433, 4865, 9729, 19457, 38913, 77825, 155649, 311297, 622593, 1245185, 2490369, 4980737, 9961473]);

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

// testMake(3);
// testMake(4);
// testMake(5);
// testMake(9999);
// testMake(20);

// [9, 3, 5]
// [1, 1, 1, 2]
// [1, 1, 1, 4]
// [4, 7, 13, 25]
// [5, 9, 17, 33, 65]
// [20, 39, 77, 153, 305, 609, 1217, 2433, 4865, 9729, 19457, 38913, 77825, 155649, 311297, 622593, 1245185, 2490369, 4980737, 9961473]