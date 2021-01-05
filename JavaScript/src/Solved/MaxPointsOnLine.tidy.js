// https://leetcode-cn.com/problems/max-points-on-a-line/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var maxPoints = function (points) {
    const len = points.length;
    if (len < 2) return len;
    const slopes = {};
    let maxRepeat = 0;
    for (let i = 0; i < len; i++) {
        let tempSlopes = {};
        let repeat = 0;
        for (let j = i + 1; j < len; j++) {
            const [xi, yi] = points[i];
            const [xj, yj] = points[j];
            if (xi == xj && yi == yj) {
                repeat++;
            }
            else {
                let slope = (1000 * (yi - yj) / (xi - xj)) / 1000;
                slope = slope == -Infinity ? Infinity : slope;
                if (!(slope in tempSlopes)) {
                    tempSlopes[slope] = 1
                }
                tempSlopes[slope]++;
            }
        }

        maxRepeat = Math.max(maxRepeat, repeat + 1);
        for (const slope in tempSlopes) {
            const count = tempSlopes[slope] + repeat;
            slopes[slope] = slope in slopes ? Math.max(slopes[slope], count) : count;
        }
    }

    return Math.max(maxRepeat, ...Object.values(slopes));
};

function test(points) {
    Test.test(maxPoints, points);
}

// test([[0, 0], [1, 1], [0, 0]]);
// test([[1, 1], [2, 2], [3, 3]]);
// test([[1, 1], [2, 2], [2, 2], [3, 3]]);
// test([[1, 1], [2, 2], [1, 1], [3, 3]]);
// test([[1, 1], [1, 1], [2, 2], [3, 3]]);
// test([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]);
// test([[1, 1], [3, 2], [5, 3], [4, 1], [4, 1], [2, 3], [1, 4]]);
// test([]);
// test([[0, 0]]);
// test([[0, 0], [0, 0]]);
// test([[0, 0], [0, 0], [0, 0]]);
// test([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
// test([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 1]]);
// test([[4, 0], [4, -1], [4, 5]]);
// test([[1, 1], [1, 1], [0, 0], [3, 4], [4, 5], [5, 6], [7, 8], [8, 9]]);
test([[0, 0], [94911150, 94911151], [94911151, 94911152]]);
test([[0, 0], [94911151, 94911150], [94911152, 94911151]]);

// [[0, 0], [1, 1], [0, 0]]
// [[1, 1], [2, 2], [3, 3]]
// [[1, 1], [2, 2], [2, 2], [3, 3]]
// [[1, 1], [2, 2], [1, 1], [3, 3]]
// [[1, 1], [1, 1], [2, 2], [3, 3]]
// [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]
// [[1, 1], [3, 2], [5, 3], [4, 1], [4, 1], [2, 3], [1, 4]]
// []
// [[0, 0]]
// [[0, 0], [0, 0]]
// [[0, 0], [0, 0], [0, 0]]
// [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
// [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 1]]
// [[4, 0], [4, -1], [4, 5]]
// [[1, 1], [1, 1], [0, 0], [3, 4], [4, 5], [5, 6], [7, 8], [8, 9]]
// [[0, 0], [94911150, 94911151], [94911151, 94911152]]
// [[0, 0], [94911151, 94911150], [94911152, 94911151]]