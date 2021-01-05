const Test = require("../Common/Test");

function testLongFor(length) {
    Test.test(function () {
        let val = 0;
        for (let i = 0; i < 10 ** length; i++) {
            val = i;
        }
        return val;
    });
}

function testForInFor(n) {
    Test.test(function () {
        // let val = 0;
        let [x, y] = [0, 0];
        for (let i = 0; i < n; i++) {
            // x++;
            for (let j = 0; j < n; j++) {
                y++;
            }
        }
        // console.log({val});
        // console.log([x, y]);
        return [x, y];
    })
}

testForInFor(20000);