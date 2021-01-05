// https://leetcode-cn.com/problems/falling-squares/
var Test = require('./Common/Test');

var fallingSquares = function (squares) {
    let coords = new Set();
    for (const [left, side] of squares) {
        coords.add(left);
        coords.add(left + side - 1);
    }
    coords = [...coords].sort((a, b) => a - b);
    let i = 0;
    const indices = new Map();
    for (const coord of coords) {
        indices.set(coord, i++);
    }
    const heights = Array(i).fill(0);

    let maxHeight = 0;
    const maxHeights = [];
    for (const [left, side] of squares) {
        let bottom = 0;
        const start = indices.get(left);
        const end = indices.get(left + side - 1) + 1;
        for (let i = start; i < end; i++) {
            bottom = Math.max(bottom, heights[i]);
        }
        const height = bottom + side;
        for (let i = start; i < end; i++) {
            heights[i] = height;
        }
        maxHeight = Math.max(maxHeight, height);
        maxHeights.push(maxHeight);
    }
    return maxHeights;
};

function run(squares) {
    Test.run(fallingSquares, squares);
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(fallingSquares, id);
}

run([[1, 2], [2, 3], [6, 1]])
run([[100, 100], [200, 100]])

testWithTestcase(108513718);