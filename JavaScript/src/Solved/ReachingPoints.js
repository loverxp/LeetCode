// https://leetcode-cn.com/problems/reaching-points/
var Test = require('../Common/Test');


var reachingPoints = function (sx, sy, tx, ty) {
    while (tx != ty) {
        switch (true) {
            case sx == tx && sy == ty: return true;
            case tx < sx || ty < sy: return false;
            case tx > ty: {
                let x = (tx - sx) % ty + sx;
                x = (x > sx && x > ty) ? x - ty : x;
                tx = tx == x ? x - ty : x;
                break;
            }
            case ty > tx: {
                let y = (ty - sy) % tx + sy;
                y = (y > sy && y > tx) ? y - tx : y;
                ty = ty == y ? y - tx : y;
                break;
            }
        }
    }
    return sx == tx && sy == ty;
}

function doTest(...args) {
    Test.test(reachingPoints, ...args);
}

doTest(1, 1, 1, 1);
doTest(1, 1, 3, 5);
doTest(3, 3, 12, 9);
doTest(9, 10, 9, 19);
doTest(1, 3, 1000000000, 3);
doTest(10, 5, 15, 5);

doTest(1, 1, 2, 2);
doTest(9, 5, 12, 8);
doTest(35, 13, 455955547, 420098884);
doTest(35, 13, 119, 104);
doTest(35, 13, 4555547, 4200988);

doTest(1, 5, 19, 5);
/*
test('', () => {
    expect(doTest(1, 1, 3, 5)).tobe(true);
    expect(doTest(1, 1, 2, 2)).tobe(false);
    expect(doTest(1, 1, 1, 1)).tobe(true);
    expect(doTest(9, 5, 12, 8)).tobe(false);
    expect(doTest(35, 13, 455955547, 420098884)).tobe(false);
    expect(doTest(35, 13, 4555547, 4200988)).tobe(false);
    expect(doTest(1, 3, 1000000000, 3)).tobe(true);
    expect(doTest(3, 3, 12, 9)).tobe(true);
    expect(doTest(9, 10, 9, 19)).tobe(true);
});

*/