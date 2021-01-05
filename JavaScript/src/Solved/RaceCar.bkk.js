// https://leetcode-cn.com/problems/race-car/
var Test = require('./Common/Test');

var racecar = function (target) {
    const triedStates = new Set();
    const queue = [];
    tryNext(0, 1, 0);
    while (queue[0].pos != target) {
        const state = queue.shift();
        console.log({ state });
        const { pos, speed, steps } = state;
        // const { pos, speed, steps } = queue.shift();
        tryNext(pos + speed, speed << 1, steps + 1);
        tryNext(pos, speed > 0 ? -1 : 1, steps + 1);
    }
    return queue[0].steps;

    function tryNext(pos, speed, steps) {
        const key = `${pos},${speed}`;
        if (!triedStates.has(key)) {
            triedStates.add(key);
            queue.push({ pos, speed, steps });
        }
    }
};

function test(target) {
    Test.test(racecar, target);
}


// test(3);
// test(6);
// test(-6);
// test(11);
// test(-11);
// test(111);
// test(-111);
// test(345);
// test(-736);
test(736);
// test(2000);
// test(3000);
// test(10000);