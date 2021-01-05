// https://leetcode-cn.com/problems/race-car/
var Test = require('../Common/Test');

var racecar = function (target) {
    let states = new Map();
    states.set(0, [1]);
    let steps = 0;
    while (!states.has(target)) {
        steps++;
        const prevStates = states;
        states = new Map();
        for (const [pos, speeds] of prevStates) {
            for (const speed of speeds) {
                addState(pos + speed, speed << 1);
                addState(pos, speed > 0 ? -1 : 1);
            }
        }
    }
    return steps;

    function addState(pos, speed) {
        // console.log({ pos, speed });

        if (!states.has(pos)) {
            states.set(pos, new Set());
        }
        states.get(pos).add(speed);
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
// test(736);
// test(2000);
// test(3000);
test(10000);