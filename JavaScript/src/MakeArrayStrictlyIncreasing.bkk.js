// https://leetcode-cn.com/problems/make-array-strictly-increasing/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

// Test.isDebugLogOn = false;

var makeArrayIncreasing = function (arr1, arr2) {
    arr2 = [...new Set(arr2)];
    arr2.sort((a, b) => a - b);
    Test.log(arr1);
    Test.log(arr2);

    // Test.debugLog(arr1[-1]);

    let prev = -Infinity;
    let j = 0;
    let steps = 0;
    // for (let i = 1; i < arr1.length; i++) {
    for (let i = 1; i < arr1.length; i++) {
        Test.log();
        Test.log({ i, j });
        if (arr1[i] <= arr1[i - 1]) {
            let candidate;
            do {
                if (j == arr2.length) return -1;
                candidate = arr2[j++];
            } while (candidate <= prev);
            Test.log({ candidate });
            Test.log(arr1[i - 1]);

            // if (candidate >= arr1[i - 1]) return -1;
            if (candidate < arr1[i - 1]) {

                arr1[i - 1] = candidate;
                Test.log("??");
                steps++;
                if (candidate >= arr1[i]) {
                    Test.log(arr1[i]);
                    if (j == arr2.length) return -1;
                    arr1[i] = arr2[j++];

                    Test.log(arr1[i]);
                    steps++;
                }
            }
        }
        prev = arr1[i - 1];
    }
    console.log({ arr1 });
    console.log({ arr2 });
    return steps;
};

function debugLog(...args) {
    // Test.debugLog(...args);
    // Test.isDebugLogOn = false;
    // Test.debugLog(...args);
}

// debugLog("abc",123);

function test(arr1, arr2) {
    Test.test(makeArrayIncreasing, arr1, arr2);
}

// test([1, 5, 3, 6, 7], [1, 3, 2, 4]);
// test([1, 5, 3, 6, 7], [4, 3, 1]);
// test([1, 5, 3, 6, 7], [1, 6, 3, 3]);
// test([0, 11, 6, 1, 4, 3], [5, 4, 11, 10, 1, 0]);

// test([5, 3], [4, 6]);
// test([5, 3], [6, 7]);
test([5, 3, 7], [8, 9]);
// test([5, 3, 7], [2, 8, 9]);
// test([5, 3, 3], [1, 2]);

// test([5, 3, 6, 7]);
// test([100, 3, 6, 7]);
// test([5, 3, 7, 8]);

// [1, 5, 3, 6, 7]
// [1, 3, 2, 4]
// [1, 5, 3, 6, 7]
// [4, 3, 1]
// [1, 5, 3, 6, 7]
// [1, 6, 3, 3]
// [0, 11, 6, 1, 4, 3]
// [5, 4, 11, 10, 1, 0]
