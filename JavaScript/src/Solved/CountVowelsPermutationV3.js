// https://leetcode-cn.com/problems/count-vowels-permutation/
var Test = require('./Common/Test');

var countVowelPermutation = function (n) {
    const mod = 1000000007;
    const charMap = ["1", "02", "0134", "24", "0"];
    let visitedMap = [1, 1, 1, 1, 1];
    for (let i = 1; i < n; i++) {
        const array = [];
        for (let i = 0; i < 5; i++) {
            let count = 0;
            for (const index of charMap[i]) {
                count += visitedMap[index];
            }
            array[i] = count % mod;
        }
        visitedMap = array;
    }
    return visitedMap.reduce((a, b) => a + b) % mod;
};

function test(n) {
    Test.test(countVowelPermutation, n);
}

// test(1);
// test(2);
// test(3);
// test(4);
// test(5);
// test(20);
// test(30);
// test(50);
// test(100);
// test(1000);
// test(3000);
// test(10000);
// test(20000);

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

function fibonacci0(n) {
    let a = 0, b = 1;

    // for (let i = 1; i < n + 1; i++) {
    for (let i = 1; i < n; i++) {
        const sum = a + b;
        a = b;
        b = sum;
    }
    return b;
}

function testFibonacci(n) {
    Test.test(fibonacci0, n);
    Test.test(fibonacci1, n);
    // Test.test(fibonacci2, n);
    // Test.test(fibonacci3, n);
}

// testFibonacci(40);
// testFibonacci(10);
// testFibonacci(12);
// testFibonacci(24);
testFibonacci(36);
// testFibonacci(4);
// testFibonacci(1);
// testFibonacci(10000);
// testFibonacci(1000000000);

// const str = "aeiou";
// for (const char of str) {
//     console.log({char});
// }