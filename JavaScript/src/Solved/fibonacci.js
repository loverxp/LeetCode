var Test = require('../Common/Test');

function fibonacci1(n) {
    switch (n) {
        case 1: return 1;
        case 2: return 1;
        default: return fibonacci1(n - 1) + fibonacci1(n - 2);
    }
}

const memo = new Map();
function fibonacci2(n) {
    if (!memo.has(n)) {
        switch (n) {
            case 1: memo.set(1, 1); break;
            case 2: memo.set(2, 1); break;
            default: memo.set(n, fibonacci2(n - 1) + fibonacci2(n - 2)); break;
        }
    }
    return memo.get(n);
}

function fibonacci3(n) {
    const dp = Array(n + 1).fill();
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

function fibonacci4(n) {
    switch (n) {
        case 1: return 1;
        case 2: return 1;
        default: {
            let n1 = 1, n2 = 1;
            let value = 0;
            for (let i = 3; i <= n; i++) {
                value = n1 + n2;
                n1 = n2;
                n2 = value;
            }
            return value;
        }
    }
}

function fibonacci5(n) {
    if (n == 1 || n == 2) return 1;
    let n1 = 1, n2 = 1;
    // let value = 0;
    for (let i = 3; i <= n; i++) {
        // value = n1 + n2;
        // n1 = n2;
        // n2 = value;
        // [n1, n2] = [n2, value]
        [n1, n2] = [n2, n1 + n2];
    }
    // return value;
    return n2;
    // return n1;
}

function testFibonacci(n) {
    // Test.test(fibonacci1, n);
    // Test.test(fibonacci2, n);
    // Test.test(fibonacci3, n);
    Test.test(fibonacci5, n);
}

// testFibonacci(5);
testFibonacci(40);
// testFibonacci(45);
// testFibonacci(10);
// testFibonacci(4);
// testFibonacci(1);
// testFibonacci(1000);
// testFibonacci(10000);
// testFibonacci(1000000000);