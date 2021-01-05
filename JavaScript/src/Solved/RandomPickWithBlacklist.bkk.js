// https://leetcode-cn.com/problems/random-pick-with-blacklist/
var Test = require('../Common/Test');

var Solution = function (n, blacklist) {
    this.n = n;
    this.blacklist = new Set(blacklist);
    // this.blacklist = new Set(blacklist);
};

Solution.prototype.pick = function () {
    let num = Math.trunc(Math.random() * this.n);
    while (this.blacklist.has(num)) {
        if (++num == this.n) num = 0;
    }
    return num;
}

// Solution.prototype.pick = function () {
//     let num;
//     do {
//         num = Math.trunc(Math.random() * this.n);
//     } while (this.blacklist.has(num));
//     return num;
// };


function sequenceTest(ops, params) {
    Test.testWithInstructions(Solution, ops, params);
}

function test(n, blacklist) {
    const set = new Set(blacklist);
    const obj = new Solution(n, blacklist);
    for (let i = 0; i < 1000; i++) {
        const val = obj.pick();
        // console.assert(false);
        console.assert(val >=0 && val < n && !set.has(val));
        console.log(val);
    }
}

// sequenceTest(["Solution", "pick", "pick", "pick"],
//     [[3, [1]], [], [], []]);
// sequenceTest(["Solution", "pick", "pick", "pick"],
//     [[10, [2, 5, 7]], [], [], []]);

test(10, [2, 5, 7, 9]);
// test(1000000000, [640145908]);

// ["Solution", "pick", "pick", "pick"]
// [[10, [2, 5, 7]], [], [], []]
