// https://leetcode-cn.com/problems/grid-illumination/
var Test = require('../Common/Test');

var gridIllumination = function (n, lamps, queries) {
    const rows = new Map();
    const cols = new Map();
    const lDiagonals = new Map();
    const rDiagonals = new Map();
    for (const [x, y] of lamps) {
        if (!rows.has(y)) {
            rows.set(y, new Set());
        }
        rows.get(y).add(x);
        if (!cols.has(x)) {
            cols.set(x, new Set());
        }
        cols.get(x).add(y);
        const sum = x + y;
        if (!lDiagonals.has(sum)) {
            lDiagonals.set(sum, new Set());
        }
        lDiagonals.get(sum).add(x);
        const diff = x - y;
        if (!rDiagonals.has(diff)) {
            rDiagonals.set(diff, new Set());
        }
        rDiagonals.get(diff).add(x);
    }

    const result = [];
    for (const [x, y] of queries) {
        const sum = x + y;
        const diff = x - y;
        const isLuminated = rows.has(y) || cols.has(x) || lDiagonals.has(sum) || rDiagonals.has(diff);
        result.push(isLuminated ? 1 : 0);
        for (let i = 0; i < 3; i++) {
            const row = rows.get(y + i - 1);
            if (row) {
                for (let j = 0; j < 3; j++) {
                    row.delete(x + j - 1);
                }
                if (row.size == 0) {
                    rows.delete(y + i - 1);
                }
            }
            const col = cols.get(x + i - 1);
            if (col) {
                for (let j = 0; j < 3; j++) {
                    col.delete(y + j - 1);
                }
                if (col.size == 0) {
                    cols.delete(x + i - 1);
                }
            }
        }
        for (let i = 0; i < 5; i++) {
            const lDiagonal = lDiagonals.get(sum + i - 2);
            if (lDiagonal) {
                for (let j = i <= 2 ? 0 : i - 2; j <= (i <= 2 ? i : 2); j++) {
                    lDiagonal.delete(x + j - 1);
                }
                if (lDiagonal.size == 0) {
                    lDiagonals.delete(sum + i - 2);
                }
            }
            const rDiagonal = rDiagonals.get(diff + i - 2);
            if (rDiagonal) {
                for (let j = i <= 2 ? 0 : i - 2; j <= (i <= 2 ? i : 2); j++) {
                    rDiagonal.delete(x + j - 1);
                }
                if (rDiagonal.size == 0) {
                    rDiagonals.delete(diff + i - 2);
                }
            }
        }
    }
    return result;
};

// function isConflict([x1, y1], [x2, y2]) {
//     return y1 == y2 || x1 == x2 || y1 - x1 == y2 - x2 || y1 + x1 == y2 + x2;
// }

function test(n, lamps, queries) {
    Test.test(gridIllumination, n, lamps, queries);
}

test(5, [[0, 0], [4, 4]], [[1, 1], [1, 0]]);
