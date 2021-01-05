// https://leetcode-cn.com/problems/best-position-for-a-service-centre/
var Test = require('./Common/Test');

var getMinDistSum = function (positions) {
    // if (positions.length == 1) return positions[0];

    const isSameLine = ([x1, y1], [x2, y2], [x3, y3]) => {
        return (x1 - x2) * (y1 - y3) == (x1 - x3) * (y1 - y2);
    }

    const calcDistance = ([x1, y1], [x2, y2]) => {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    const calcCenter = ([x1, y1], [x2, y2], [x3, y3]) => {
        const a = x1 - x2;
        const b = y1 - y2;
        const c = x1 - x3;
        const d = y1 - y3;
        const e = ((x1 ** 2 - x2 ** 2) - (y2 ** 2 - y1 ** 2)) / 2;
        const f = ((x1 ** 2 - x3 ** 2) - (y3 ** 2 - y1 ** 2)) / 2;
        const g = (a * d - b * c);
        return [(d * e - b * f) / g, (a * f - c * e) / g];
    };

    if (positions.length == 1) return 0;
    if (positions.length == 2) {
        const [x1, y1] = positions[0];
        const [x2, y2] = positions[1];
        // return [(x1 + x2) / 2, (y1 + y2) / 2];
        return calcDistance(positions[0], positions[1]);
    }
    // return calcCenter(positions[0], positions[1], positions[2]);
    const center = calcCenter(positions[0], positions[1], positions[2]);

    return positions.reduce((sum, position) => sum + calcDistance(center, position), 0)
};

function test(positions) {
    Test.test(getMinDistSum, positions);
}

test([[0, 1], [1, 0], [1, 2], [2, 1]]);
test([[1, 1], [3, 3]]);
test([[1, 1]]);
test([[1, 1], [0, 0], [2, 0]]);
test([[0, 1], [3, 2], [4, 5], [7, 6], [8, 9], [11, 1], [2, 12]]);

// ref:
// https://blog.csdn.net/liyuanbhu/article/details/52891868