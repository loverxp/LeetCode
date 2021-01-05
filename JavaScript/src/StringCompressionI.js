// https://leetcode-cn.com/problems/string-compression-ii/
var Test = require('./Common/Test');

var getLengthOfOptimalCompression = function (s, k) {
    const counters = [];
    let lastChar;
    for (const char of s) {
        if (lastChar == char) {
            counters[counters.length - 1][1]++;
        }
        else {
            lastChar = char;
            counters.push([char, 1]);
        }
    }
    const indexes = [...counters.keys()]
    indexes.sort((i1, i2) => counters[i1][1] - counters[i2][1]);

    for (const index of indexes) {
        const counter = counters[index];
        const count = counter[1];

        if (k >= count) {
            k -= count;
            counter[1] = 0;
        }
        else if (k == count - 1) {
            k -= count - 1;
            counter[1] = 1;
        }
        else {
            break;
        }
    }


    // let totalLength = 0;
    // return totalLength;
    // while (k > 0) {

    // }

    // return { counters, totalLength };
    return counters;


};

function test(s, k) {
    Test.test(getLengthOfOptimalCompression, s, k);
}

test("aaabcccd", 2);
test("aabbaa", 2);
test("aaaaaaaaaaa", 0);