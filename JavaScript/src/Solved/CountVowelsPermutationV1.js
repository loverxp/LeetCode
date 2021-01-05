// https://leetcode-cn.com/problems/count-vowels-permutation/
var Test = require('./Common/Test');

var countVowelPermutation = function (n) {
    const mod = 1000000007;
    const charMap = {
        'a': ['e'],
        'e': ['a', 'i'],
        'i': ['a', 'e', 'o', 'u'],
        'o': ['i', 'u'],
        'u': ['a']
    };
    const visitedMap = new Map();

    return countStrings(Object.keys(charMap), n);

    function countStrings(chars, n) {
        const key = chars.join('') + n;
        let total = 0;
        if (!visitedMap.has(key)) {
            for (const char of chars) {
                if (n == 1) {
                    total++;
                }
                else {
                    total += countStrings(charMap[char], n - 1);
                }
            }
            total %= mod;
            visitedMap.set(key, total);
        }
        else {
            total = visitedMap.get(key);
        }
        return total;
    }

};

function test(n) {
    Test.test(countVowelPermutation, n);
}

// test(1);
// test(2);
// test(5);
// test(20);
// test(30);
test(50);
// test(100);
// test(500);
test(1000);         //89945857
// test(3000);
// test(10000);