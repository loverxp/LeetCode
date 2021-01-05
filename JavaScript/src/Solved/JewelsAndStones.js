// https://leetcode-cn.com/problems/jewels-and-stones/
var Test = require('../Common/Test');

var numJewelsInStones = function (J, S) {
    const types = new Set(J);
    let count = 0;
    for (const char of S) {
        if (types.has(char)) {
            count++;
        }
    }
    return count;
};

function test(J, S) {
    Test.test(numJewelsInStones, J, S);
}

test("aA", "aAAbbbb");
test("z", "ZZ");