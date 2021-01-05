// https://leetcode-cn.com/problems/meChtZ/
var Test = require('./Common/Test');

var busRapidTransit = function (target, inc, dec, jump, cost) {

};

function run(target, inc, dec, jump, cose) {
    Test.run(busRapidTransit, target, inc, dec, jump, cose);
}

run(31, 5, 3, [6], [10]);
run(612, 4, 5, [3, 6, 8, 11, 5, 10, 4], [4, 7, 6, 3, 7, 6, 4]);