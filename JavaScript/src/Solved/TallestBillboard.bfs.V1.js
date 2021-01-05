// https://leetcode-cn.com/problems/tallest-billboard/
var Test = require('../Common/Test');

var tallestBillboard = function (rods) {
    const n = rods.length;
    if (n == 0) return 0;

    const totalLength = rods.reduce((a, b) => a + b);
    const halfTotalLength = Math.trunc(totalLength / 2);
    // const dp = Array.from({ length: n }, () => Array.from({ length: 3 }, () => 0));

    let maxHeights = [0];
    // let heights = [[0, 0]];
    // for (let i = 0; i < n; i++) {
    let heights = [[0, 0], [rods[0], 0]];
    for (let i = 1; i < n; i++) {
        // for (let i = 0; i < n && heights.length; i++) {
        Test.log();
        Test.log({ maxHeights });
        Test.log({ heights });
        // const heights2 = [];
        // for (const [lh, rh] of heights) {

        // }
        // heights = heights2;
        const rod = rods[i];
        const len = heights.length;
        for (let j = 0; j < len; j++) {
            const [lh, rh] = heights[j];
            const nlh = lh + rod;
            const nrh = rh + rod;
            // if (nlh <= halfTotalLength) {
            //     heights.push([nlh, rh]);
            //     if (nlh == rh) maxHeights.push(rh);
            // }
            // if (nrh <= halfTotalLength) {
            //     heights.push([lh, nrh]);
            //     if (lh == nrh) maxHeights.push(lh);
            // }
            heights.push([nlh, rh]);
            heights.push([lh, nrh]);
            if (nlh == rh) maxHeights.push(rh);
            if (lh == nrh) maxHeights.push(lh);
            // if (lh + rod == rh) maxHeights.push(rh);
            // if (lh == rh + rod) maxHeights.push(lh);
        }
    }
    Test.log();
    Test.log("end");
    Test.log({ maxHeights });
    Test.log({ heights });
    return maxHeights;
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