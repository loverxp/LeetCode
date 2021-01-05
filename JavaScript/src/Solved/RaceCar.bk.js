// https://leetcode-cn.com/problems/race-car/
var Test = require('./Common/Test');

var racecar = function (target) {

    let minSteps = Infinity;

    backTracing(0, 1, 0);
    return minSteps;

    function backTracing(pos, speed, steps) {
        console.log();
        console.log({ pos, speed, steps });
        if (steps < minSteps) {
            if (pos == target) {
                console.log("target!");
                minSteps = steps;
                return true;
            }
            else if (pos < target) {
                // backTracing(pos + speed, speed * 2, steps + 1);
                // backTracing(pos, speed > 0 ? -1 : 1, steps + 1);
                steps++
                return backTracing(pos + speed, speed * 2, steps)
                    || backTracing(pos, speed > 0 ? -1 : 1, steps);
            }
        }
        else {
            return false;
        }
    }
};

function test(target) {
    Test.test(racecar, target);
}


test(3);
// test(6);