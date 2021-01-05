// https://leetcode-cn.com/problems/number-of-ways-to-wear-different-hats-to-each-other/
var Test = require('../Common/Test');

var numberWays = function (hats) {
    const mod = 1e9 + 7;
    const n = hats.length;
    const peopleMask = [...hats.keys()].map(i => 1 << i);
    hats = convertHats(hats);
    let states = new Map();
    states.set(0, 1);
    for (const [, people] of hats) {
        const states2 = new Map();
        for (const [visited, count] of states) {
            const updateStates = (visited) => {
                if (!states2.has(visited)) {
                    states2.set(visited, count);
                }
                else {
                    states2.set(visited, (count + states2.get(visited)) % mod);
                }
            }
            updateStates(visited);
            for (const person of people) {
                if (!(visited & person)) {
                    updateStates(visited | person);
                }
            }
        }
        states = states2;
    }
    return states.get((1 << n) - 1) || 0;

    function convertHats(hats) {
        const map = new Map();
        for (let i = 0; i < n; i++) {
            for (const hat of hats[i]) {
                if (!map.has(hat)) {
                    map.set(hat, new Set());
                }
                map.get(hat).add(peopleMask[i]);
            }
        }
        return map;
    }
};

function test(hats) {
    Test.test(numberWays, hats);
}

// test([[3, 4], [4, 5], [5]]);
// test([[3, 5, 1], [3, 5]]);
// test([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
// test([[1, 2, 3], [2, 3, 5, 6], [1, 3, 7, 9], [1, 8, 9], [2, 5, 7]]);
// test([[3, 5, 40], [3, 5]]);
// test([[4, 9, 12, 13, 16, 17, 21, 25], [1, 8, 16, 21, 22, 23], [1, 3, 7, 8, 9, 10, 12, 15, 17, 18, 19, 22, 23, 25], [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 21, 23, 24, 25], [4, 9, 18, 19, 20, 22], [5, 7, 8, 12, 14, 20, 21, 23, 24, 25], [1, 2, 3, 5, 6, 7, 8, 10, 11, 13, 15, 16, 19, 20, 23, 25]]);
test([[1, 2], [1, 3], [2, 3], [3]]);