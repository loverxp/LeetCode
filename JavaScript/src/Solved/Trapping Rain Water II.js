// https://leetcode-cn.com/problems/trapping-rain-water-ii/
var Test = require('./Common/Test');
const { Matrix } = require('./Common/Matrix');
const { HeapWithPercolate } = require('./Common/HeapWithPercolate');
const { Heap } = require('./Common/Heap');

function log(...args) {
    console.log(...args);
}

var trapRainWater = function (heightMap) {
    const [m, n] = [heightMap.length, heightMap[0].length];
    if (m < 3 || n < 3) return 0;

    const coords = Array.from({ length: m }, (_, y) => Array.from({ length: n }, (_, x) => [x, y]));
    const availables = Array.from({ length: m }, () => Array.from({ length: n }, () => true));
    // const handled = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

    // const heap = new HeapWithPercolate(([x1, y1], [x2, y2]) => heightMap[y1][x1] <= heightMap[y2][x2]);
    const heap = new HeapWithPercolate(([x1, y1], [x2, y2]) => heightMap[y1][x1] < heightMap[y2][x2]);
    // const heap = new Heap(([x1, y1], [x2, y2]) => heightMap[y1][x1] < heightMap[y2][x2]);

    for (let y = 1; y < m - 1; y++) {
        for (let x = 1; x < n - 1; x++) {
            heap.push(coords[y][x]);
        }
    }

    for (let x = 1; x < n - 1; x++) {
        if (heightMap[0][x] < heightMap[1][x]) {
            availables[1][x] = false;
        }
        if (heightMap[m - 1][x] < heightMap[m - 2][x]) {
            availables[m - 2][x] = false;
        }
    }
    for (let y = 1; y < m - 1; y++) {
        if (heightMap[y][0] < heightMap[y][1]) {
            availables[y][1] = false;
        }
        if (heightMap[y][n - 1] < heightMap[y][n - 2]) {
            availables[y][n - 2] = false;
        }
    }

    log(heap);
    log(availables);

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
                const val = heightMap[y][x];
                let minHeight = Infinity;
                // const [x, y] = top;
                let states = [top];
                while (states.length) {
                    log();
                    log(states);
                    const state2 = [];
                    for (const [x, y] of states) {
                        for (const [ox, oy] of dirs) {
                            const [nx, ny] = [x + ox, y + oy];
                            const nextVal = heightMap[ny][nx];
                            if (nextVal > val) {
                                minHeight = Math.min(minHeight, nextVal);
                                log({ minHeight });
                            }
                            else {
                                log({ nx, ny, nextVal });
                                // if (nx == 1 || nx == n - 2 || ny == 1 || ny == m - 2) {
                                if (nx == 0 || nx == n - 1 || ny == 0 || ny == m - 1) {
                                    // throw "";
                                    const [x, y] = [nx, ny];
                                    const val = nextVal;
                                    throw JSON.stringify({ x, y, val });
                                }
                                else {
                                    if (!availables[ny][nx]) {
                                        // throw "";

                                        throw JSON.stringify(availables[ny][nx]);
                                    }
                                    else {
                                        const coord = coords[ny][nx];
                                        if (!visited.has(coord)) {
                                            visited.add(coords[ny][nx]);
                                            state2.push(coord);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    states = state2;
                }
                count += visited.size * (minHeight - val);
                // for (const [x, y] of visited) {
                for (const coord of visited) {
                    const [x, y] = coord;
                    heightMap[y][x] += (minHeight - val);
                    // handled[y][x] = true;
                    heap.changeDown(coord);
                }
            } catch (e) {
                // log("exption:", e.message);
                log("exption:", e);
                for (const [x, y] of visited) {
                    availables[y][x] = false;
                }
            }
        }
    }
    return count;
};

function run(heightMap) {
    Matrix.logMatrixInArray(heightMap);
    Test.logArgs = false;
    Test.run(trapRainWater, heightMap);
}

// run([[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]])
run([[12, 13, 1, 12], [13, 4, 13, 12], [13, 8, 10, 12], [12, 13, 12, 12], [13, 13, 13, 13]]);