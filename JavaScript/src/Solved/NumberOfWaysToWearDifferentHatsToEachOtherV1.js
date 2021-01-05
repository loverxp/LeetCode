// https://leetcode-cn.com/problems/number-of-ways-to-wear-different-hats-to-each-other/
var Test = require('./Common/Test');

var numberWays = function (hats) {
    // const mod = 10 ** 9 + 7;
    const mod = 1e9 + 7;
    for (let i = 0; i < hats.length; i++) {
        for (let j = 0; j < hats[i].length; j++) {
            hats[i][j] = 1n << (BigInt(hats[i][j]) - 1n);
        }
    }
    const hatsIterator = hats.values();
    let nextHats = hatsIterator.next();
    let states = new Map();
    states.set(0n, 1);
    while (!nextHats.done && states.size) {
        const states2 = new Map();
        const favorates = nextHats.value;
        for (const [state, count] of states) {
            for (const favorate of favorates) {
                const newState = state | favorate;
                if (state != newState) {
                    if (!states2.has(newState)) {
                        states2.set(newState, count);
                    }
                    else {
                        states2.set(newState, (count + states2.get(newState)) % mod);
                    }
                }
            }
        }
        nextHats = hatsIterator.next();
        states = states2;
    }
    let total = 0;
    for (const [_, count] of states) {
        total += count;
        total % mod;
    }
    return total;
};

function test(hats) {
    Test.test(numberWays, hats);
}

test([[3, 4], [4, 5], [5]]);
test([[3, 5, 1], [3, 5]]);
test([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
test([[1, 2, 3], [2, 3, 5, 6], [1, 3, 7, 9], [1, 8, 9], [2, 5, 7]]);
test([[3, 5, 40], [3, 5]]);
test([[4, 9, 12, 13, 16, 17, 21, 25], [1, 8, 16, 21, 22, 23], [1, 3, 7, 8, 9, 10, 12, 15, 17, 18, 19, 22, 23, 25], [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 21, 23, 24, 25], [4, 9, 18, 19, 20, 22], [5, 7, 8, 12, 14, 20, 21, 23, 24, 25], [1, 2, 3, 5, 6, 7, 8, 10, 11, 13, 15, 16, 19, 20, 23, 25]]);