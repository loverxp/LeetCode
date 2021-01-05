// https://leetcode-cn.com/problems/tallest-billboard/
var Test = require('./Common/Test');

var tallestBillboard = function (rods) {
    const n = rods.length;
    if (n == 0) return 0;

    const totalLength = rods.reduce((a, b) => a + b);
    const halfTotalLength = Math.trunc(totalLength / 2);

    let maxHeight = 0;
    let heights = new Map([[0, new Set([0])]]);

    for (let i = 0; i < n; i++) {
        const rod = rods[i];
        for (const [lh, rhs] of Array.from(heights).map(([lh, rhs]) => [lh, Array.from(rhs)])) {
            const nlh = lh + rod;
            if (nlh <= halfTotalLength) {
                if (!heights.has(nlh)) {
                    heights.set(nlh, new Set());
                }
                for (const rh of rhs) {
                    heights.get(nlh).add(rh);
                }
            }
            for (const rh of rhs) {
                const nrh = rh + rod;
                if (nrh <= halfTotalLength) {
                    if (lh >= nrh) {
                        heights.get(lh).add(nrh);
                        if (lh == nrh) maxHeight = Math.max(maxHeight, lh);
                    }
                    else {
                        if (!heights.has(nrh)) {
                            heights.set(nrh, new Set());
                        }
                        heights.get(nrh).add(lh);
                    }
                }
            }
        }
    }
    return maxHeight;
};

function test(rods) {
    Test.test(tallestBillboard, rods);
}

// test([1, 2, 3, 6]);
test([1, 2, 3, 4, 5, 6]);
// test([1, 2]);

// test([2, 1, 2]);
// test([2, 1, 4, 3]);
// test([2, 1, 4, 3, 3]);