// https://leetcode-cn.com/problems/string-compression-ii/
var Test = require('./Common/Test');

var getLengthOfOptimalCompression = function (s, k) {
    const counters = [];
    let lastChar;
    // let totalLength = 0;
    for (const char of s) {
        if (lastChar == char) {
            const counter = counters[counters.length - 1];
            counter[1]++;
            // if (1 == counter[1]++) {
            // totalLength++;
            // }
        }
        else {
            lastChar = char;
            counters.push([char, 1]);
            // totalLength++;
        }
    }
    // counters.sort(([, len1], [, len2]) => len1 - len2);
    const indexes = [...counters.keys()]
    indexes.sort((i1, i2) => counters[i1][1] - counters[i2][1]);
    // return indexes;
    // sort(([, len1], [, len2]) => len1 - len2);

    // return totalLength;
    for (const index of indexes) {

        // }
        // for (const [char, count] of counters) {
        // const [char, count] = counters[index];
        const counter = counters[index];
        const count = counter[1];

        if (k >= count) {
            k -= count;
            counter[1] = 0;
            // totalLength -= count == 1 ? 1 : 2;
        }
        else if (k == count - 1) {
            k -= count - 1;
            if (count != 1) totalLength--;
            // totalLength -= count - 1;
        }
        else {
            break;
        }
    }
    return totalLength;
    // while (k > 0) {

    // }

    return { counters, totalLength };


};

function test(s, k) {
    Test.test(getLengthOfOptimalCompression, s, k);
}

test("aaabcccd", 2);
test("aabbaa", 2);
test("aaaaaaaaaaa", 0);