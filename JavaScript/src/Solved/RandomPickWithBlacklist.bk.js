// https://leetcode-cn.com/problems/random-pick-with-blacklist/
var Test = require('../Common/Test');

var Solution = function (n, blacklist) {
    this.n = n;
    this.blacklist = new Set(blacklist);
    // this.blacklist = new Map();
    // for (let i = 0; i < blacklist.length; i++) {
    //     const num = blacklist[i];

        
    // }
};

Solution.prototype.pick = function () {
    let num;
    do {
        num = Math.trunc(Math.random() * this.n);
    } while (this.blacklist.has(num));
    return num;
};

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
    const obj = new Solution(n, blacklist);
    for (let i = 0; i < 100; i++) {
        console.log(obj.pick());
    }
}

// sequenceTest(["Solution", "pick", "pick", "pick"],
//     [[3, [1]], [], [], []]);
// sequenceTest(["Solution", "pick", "pick", "pick"],
//     [[10, [2, 5, 7]], [], [], []]);

// test(10, [2, 5, 7]);
test(1000000000, [640145908]);

// ["Solution", "pick", "pick", "pick"]
// [[10, [2, 5, 7]], [], [], []]