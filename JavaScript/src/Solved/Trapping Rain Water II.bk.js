// https://leetcode-cn.com/problems/trapping-rain-water-ii/
var Test = require('../Common/Test');
const { Matrix } = require('../Common/Matrix');
const { HeapWithPercolate } = require('../Common/HeapWithPercolate');
const { Heap } = require('../Common/Heap');

var trapRainWater = function (heightMap) {
    const [m, n] = [heightMap.length, heightMap[0].length];
    const coords = Array.from({ length: m }, (_, i) => Array.from({ length: n }, (_, j) => [j, i]));
    const availables = Array.from({ length: m }, (_, i) => Array.from({ length: n }, (_, j) => true));
    const handled = Array.from({ length: m }, (_, i) => Array.from({ length: n }, (_, j) => false));

    // const heap = new HeapWithPercolate(([x1, y1], [x2, y2]) => heightMap[y1][x1] <= heightMap[y2][x2]);
    const heap = new HeapWithPercolate(([x1, y1], [x2, y2]) => heightMap[y1][x1] < heightMap[y2][x2]);
    // const heap = new Heap(([x1, y1], [x2, y2]) => heightMap[y1][x1] < heightMap[y2][x2]);


    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            heap.push(coords[i][j]);
        }
    }

    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let count = 0;
    while (heap.length) {
        const [x, y] = top = heap.top();
        if (!availables[y][x]) {
            heap.pop();
        }
        else {
            const visited = new Set([top]);
            try {
                let minHeight = Infinity;
                // const [x, y] = top;
                const states = [top];
                while (states.length) {
                    const state2 = [];
                    for (const [x, y] of states) {
                        const val = heightMap[y][x];
                        for (const [ox, oy] of dirs) {
                            const [nx, ny] = [x + ox, y + oy];
                            const nextVal = heightMap[ny][nx];
                            if (nextVal > val) {
                                minHeight = Math.min(minHeight, nextVal);
                            }
                            else {
                                if (nx == 1 || nx == n - 2 || ny == 1 || ny == m - 2) {
                                    throw "";
                                }
                                else {
                                    visited.add(coords[ny][nx]);
                                }
                            }
                        }
                    }
                    states = state2;
                }
                count += visited.size * (minHeight - val);
                for (const [x, y] of visited) {
                    heightMap[y][x] += (minHeight - val);
                    handled[y][x] = true;
                }
            } catch (e) {
                for (const [x, y] of visited) {
                    availables[y][x] = false;
                }
            }
        }
    }
    return count;

    // while (heap.length) {
    //     const top = heap.pop();
    //     const [x, y] = top;
    //     console.log({ top }, heightMap[y][x]);
    // }



    // console.log(heap);

    // heightMap[1][2] += 1;
    // heap.changeDown(coords[1][2]);
    // console.log(heightMap[1]);
    // console.log(heap);

    // heightMap[1][1] += 1;
    // heap.changeDown(coords[1][1]);
    // console.log(heightMap[1]);
    // console.log(heap);

    // return heap;

};

function run(heightMap) {
    Matrix.logMatrixInArray(heightMap);
    Test.logArgs = false;
    Test.run(trapRainWater, heightMap);
}

run([[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]])
