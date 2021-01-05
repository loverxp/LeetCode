// https://leetcode-cn.com/problems/falling-squares/
var Test = require('../Common/Test');
// var { calcFactors } = require('./Common/Primes');

function calcFactors(n) {
    const result = [];
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            n /= i;
            result.push(i);
            i--;
        }
    }
    return result;
}

var fallingSquares = function (squares) {
    const minLeft = Math.min(...squares.map(square => square[0]));
    // return minLeft;
    squares.forEach((_, i) => squares[i][0] -= minLeft);
    return squares;


    const values = squares.flat();
    const factors = calcFactors(Math.min(...values));
    let multiple = 1;
    for (const factor of factors) {
        if (values.every(value => value % factor == 0)) {
            multiple *= factor;
            for (let i = 0; i < squares.length; i++) {
                squares[i][0] /= factor;
                squares[i][1] /= factor;
            }
        }
    }

    return squares;
    // return multiple;

    const max = Math.max(...squares.map(([left, side]) => left + side));
    const heights = Array(max).fill(0);

    let maxHeight = 0;
    const maxHeights = [];
    for (const [left, side] of squares) {
        let bottom = 0;
        for (let i = left; i < left + side; i++) {
            bottom = Math.max(bottom, heights[i]);
        }
        const height = bottom + side;
        maxHeight = Math.max(maxHeight, height);
        maxHeights.push(maxHeight * multiple);
        for (let i = left; i < left + side; i++) {
            heights[i] = height;
        }
    }
    return maxHeights;
};

function run(squares) {
    Test.run(fallingSquares, squares);
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(fallingSquares, id);
}

// run([[1, 2], [2, 3], [6, 1]])
// run([[100, 100], [200, 100]])

testWithTestcase(108513718);