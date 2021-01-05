// https://leetcode-cn.com/problems/triples-with-bitwise-and-equal-to-zero/
var Test = require('../Common/Test');

var countTriplets = function (nums) {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const val = nums[i] & nums[j];
            if (!(val in counter)) {
                counter[val] = 0;
            }
            counter[val] += i == j ? 1 : 2;
        }
    }
    let count = 0;
    if (0 in counter) count += counter[0] * nums.length;
    delete counter[0];
    for (const num of nums) {
        for (const key in counter) {
            if ((key & num) == 0) {
                count += counter[key];
            }
        }
    }
    return count;
};

function test(nums) {
    Test.test(countTriplets, nums);
}

test([2, 1, 3]);


function testFor1(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                count++;
            }
        }
    }
    return count;
}

function testFor2(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            for (let k = j; k < n; k++) {
                count++;
            }
        }
    }
    return count;
}

// function test(n) {
//     Test.test(testFor1, n);
//     Test.test(testFor2, n);
// }

// test(100);
// test(1000);