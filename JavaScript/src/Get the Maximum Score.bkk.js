// https://leetcode-cn.com/problems/get-the-maximum-score/
var Test = require('./Common/Test');

var maxSum = function (nums1, nums2) {
    const mod = 1e9 + 7;
    // const mod = 1e14;
    const [m, n] = [nums1.length, nums2.length];
    const dp1 = Array(m + 1).fill();
    const dp2 = Array(n + 1).fill();
    dp1[0] = 0;
    dp2[0] = 0;
    let i = 0, j = 0;
    while (i < m && j < n) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        if (num1 == num2) {
            // dp1[i + 1] = dp2[j + 1] = Math.max(dp1[i++] + num1, dp2[j++] + num2) % mod;
            const max = Math.max(dp1[i++] + num1, dp2[j++] + num2);
            // dp1[i] = dp2[j] = max % mod;
            if (max >= mod) {
                console.log();
                console.log({ max, mod: max % mod });
            }
            // dp1[i + 1] = dp2[j + 1] = Math.max((dp1[i++] + num1) % mod, (dp2[j++] + num2) % mod);
        }
        else {
            if (num1 < num2) {
                // dp1[i + 1] = (dp1[i++] + num1) % mod;
                dp1[i + 1] = dp1[i] + nums1[i++];
                if (dp1[i] >= mod) {
                    console.log({ i });
                    console.log(dp1[i]);
                }
                // dp1[i] %= mod;
            }
            else {
                // dp2[j + 1] = (dp2[j++] + num2) % mod;
                dp2[j + 1] = (dp2[j] + nums2[j++]) % mod;
                if (dp2[j] >= mod) {
                    console.log({ j });
                    console.log(dp2[j]);
                }
                // dp2[j] %= mod;
            }
        }
    }
    while (i < m) {
        // dp1[i + 1] = (dp1[i] + nums1[i++]) % mod;
        dp1[i + 1] = dp1[i] + nums1[i++];
        if (dp1[i] >= mod) {
            console.log({ i });
            console.log(dp1[i]);
        }
        // dp1[i] %= mod;
    }
    while (j < n) {
        // dp2[j + 1] = (dp2[j] + nums2[j++]) % mod;
        dp2[j + 1] = (dp2[j] + nums2[j++]) % mod;
        if (dp2[j] >= mod) {
            console.log({ j });
            console.log(dp2[j]);
        }
        // dp2[j] %= mod;
    }

    return Math.max(dp1[m], dp2[n]);
};

function run(nums1, nums2) {
    Test.run(maxSum, nums1, nums2);
}

function testWithTestcase(id) {
    Test.testWithTestcase(maxSum, id);
}

// run([2, 4, 5, 8, 10], [4, 6, 8, 9])
// run([1, 3, 5, 7, 9], [3, 5, 100])
// run([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
// run([1, 4, 5, 8, 9, 11, 19], [2, 3, 4, 11, 12])
testWithTestcase(104807690);