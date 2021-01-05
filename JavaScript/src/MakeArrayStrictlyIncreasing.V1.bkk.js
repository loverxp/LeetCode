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

    // let dp = [0];
    let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    if (arr2[0] < arr1[0]) dp[1] = 1;

    for (let i = 1; i < m; i++) {
        console.log();
        // console.log({ dp });
        logDP({ dp });
        // const dp2 = [];
        // const dp2 = Arr
        let dp2 = Array(n + 1).fill(Infinity);
        // if (isFinite(dp[0])) {
        if (dp[0] == 0) {
            if (arr1[i] > arr1[i - 1]) dp2[0] = 0;
            // dp2[0] = arr1[i] > arr1[i - 1] ? 0 : Infinity;
            // for (let j = 1; j < k && j <= n && !isFinite(dp[i][j - 1]); j++) {
            // for (let j = 1; j < dp.length && j <= n && arr2[j] < val; j++) {
            // for (let j = 1; j <= dp.length && j <= n; j++) {
            // for (let j = 1; j < dp.length && j <= n; j++) {
            // for (let j = 1; j < dp.length && j <= n && dp2[j - 1] != 1; j++) {
            // for (let j = 1; j <= n && dp2[j - 1] != 1; j++) {
            // for (let j = 0; j < n && dp2[j] != 1; j++) {
            for (let j = 0; j < n; j++) {
                if (arr2[j] > arr1[i - 1]) {
                    dp2[j + 1] = 1;
                    break;
                }
                // dp2[j + 1] = arr2[j] > arr1[i - 1] ? 1 : Infinity;
                // dp2[j] = arr2[j - 1] > arr1[i - 1] ? dp[0] + 1 : Infinity;
                // if (isFinite(dp2[j])) break;
                // if (dp2[j] == 1) break;
            }
            // console.log({ dp2 });
        }

        const val = arr1[i];

        // for (let j = 1; j < dp.length; j++) {
        for (let j = 1; j <= n; j++) {
            if (isFinite(dp[j])) {
                // dp2[j] = Math.min(dp2[j], val > arr1[i - 1] ? dp[j] : Infinity);
                // dp2[j] = Math.min(dp2[j], val > arr1[i - 1] && val > arr2[j - 1] ? dp[j] : Infinity);
                if (val > arr1[i - 1] && val > arr2[j - 1]) {
                    dp2[j] = Math.min(dp2[j], dp[j]);
                }

                // this time: dp2[1] = Infinity;

                // dp2[j] = val > arr2[j - 1] || val > arr1[i - 1] ? dp[j] : Infinity;

                // let k = j -1;
                let k = j;
                while (k < n && arr2[k] <= arr1[i - 1]) k++;
                dp2[k] = Math.min(dp2[k], dp[j] + 1);


                // do {
                // dp2[k] = Math.min()
                // } while (k <= n && arr2[k++] < val);
                // } while (k < n && arr2[k++] < val);


                // if (arr2[j] < val) {
                // dp2[j + 1] = dp[j] + 1;
                // }

            }
        }
        // console.log({ dp2 });
        dp = dp2;
    }
    return dp;
};

function logDP(obj) {
    const key = Object.keys(obj)[0];
    console.log({ key });
    Matrix.logMatrixInArray([obj[key]], true);
}

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
test([0, 11, 6, 1, 4, 3], [5, 4, 11, 10, 1, 0]);

// test([5, 3], [4, 6]);
// test([5, 3], [6, 7]);
test([5, 3, 7], [8, 9]);
// test([5, 3, 7], [2, 8, 9]);
// test([5, 3, 3], [1, 2]);
// test([7, 8, 9, 10, 1], [1, 2, 3, 11]);


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
