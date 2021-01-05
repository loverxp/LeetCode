// https://leetcode-cn.com/problems/count-vowels-permutation/
var Test = require('../Common/Test');

var countVowelPermutation = function (n) {
    const mod = 1000000007;
    const charMap = {
        'a': ['e'],
        'e': ['a', 'i'],
        'i': ['a', 'e', 'o', 'u'],
        'o': ['i', 'u'],
        'u': ['a']
    };
    const chars = ['a', 'e', 'i', 'o', 'u'];
    let visitedMap = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
    }
    for (let i = 1; i < n; i++) {
        const obj = {};
        for (const char of chars) {
            let count = 0;
            for (const subChar of charMap[char]) {
                count += visitedMap[subChar];
            }
            obj[char] = count % mod;
        }
        visitedMap = obj;
    }
    return Object.values(visitedMap).reduce((a, b) => a + b) % mod;
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
