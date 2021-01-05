// https://leetcode-cn.com/problems/make-array-strictly-increasing/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

// Test.isDebugLogOn = false;

var makeArrayIncreasing = function (arr1, arr2) {
    if (arr1.length == 1) return 0;

    arr2 = [...new Set(arr2)];
    arr2.sort((a, b) => a - b);
    Test.log(arr1);
    Test.log(arr2);

    const [m, n] = [arr1.length, arr2.length];

    let steps1 = 0, steps2 = Infinity;
    let j1 = 0, j2 = 0;
    if (arr2[0] < arr1[0]) {
        steps2 = 1;
        j2 = 1;
    }


    for (let i = 1; i < m; i++) {
        if (steps1 == 0) {

        }


        if (isFinite(dp[i - 1][0])) {
            // dp[i].push(arr1[i] > arr1[i - 1] ? 0 : Infinity);
            if (arr1[i] > arr1[i - 1]) {
                dp[i][0] = 0;
                // dp[i].push(0);
            }
            else {
                dp[i][0] = Infinity;
            }
            // dp[i].push(Infinity);
            // for (let j = 1; j < k; j++) {
            // for (let j = 1; j < k && j <= n; j++) {
            for (let j = 1; j < k && j <= n && !isFinite(dp[i][j - 1]); j++) {
                dp[i][j] = arr2[j - 1] > arr1[i - 1] ? dp[i - 1][0] + 1 : Infinity;
                // if () {

                // }
                // if (arr2[j - 1] > arr1[i - 1]) {
                //     dp[i].push(dp[i - 1][0] + 1);
                //     break;
                // }
                // else {
                //     dp[i].push(Infinity);
                // }
            }
            // dp[i][1] = 1;
            // dp[i].push(Infinity, 1);
        }

        for (let j = 1; j < k; j++) {

            dp[j + 1]

            // dp[i-1][j]

        }
        // dp[i] = Array(k + 1).fill(Infinity);
        // dp[i]
        // for (let j = 0; j < n + 1; j++) {

        // }
        // for (let j = 0; j < n; j++) {
        // const element = array[j];
        // }

    }



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
test([7, 8, 9, 10, 1], [1, 2, 3, 11]);


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
