// https://leetcode-cn.com/problems/trapping-rain-water-ii/
var Test = require('./Common/Test');
const { Matrix } = require('./Common/Matrix');
// const { HeapWithPercolate } = require('./Common/HeapWithPercolate');
// const { Heap } = require('./Common/Heap');

class Heap {
    constructor(compare, array) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
        this.map = new Map();
        if (array) {
            for (const val of array) {
                this.push(val);
            }
        }
    }

    push(val) {
        if (this.tree.length == 1) {
            this.tree.push(val);
            this.map.set(val, 1);
        }
        else {
            const last = this.tree.length;
            let i = last, p = Math.trunc(i / 2);
            while (i > 1 && this.compare(val, this.tree[p])) {
                const val2 = this.tree[p];
                this.tree[i] = val2;

                this.map.set(val2, i)

                i = p;
                p = Math.trunc(i / 2);
            }
            this.tree[i] = val;
            this.map.set(val, i);
        }
        this.length++;
    }

    top() {
        return this.tree[1];
    }

    pop() {
        this.length--;
        const top = this.tree[1];
        this.map.delete(top);

        const last = this.tree[this.tree.length - 1];
        let i = 1, li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = this.tree[ri];
            if (this.compare(last, lval) && (rval == undefined || this.compare(last, rval))) {
                break;
            }
            else {
                if (rval == undefined || this.compare(lval, rval)) {
                    this.tree[i] = lval;
                    this.map.set(lval, i);
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    this.map.set(rval, i);
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree.pop();
        if (i != this.tree.length) {
            this.tree[i] = last;
            this.map.set(last, i);
        }
        return top;
    }

    changeDown(val) {
        let i = this.map.get(val);
        let li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = this.tree[ri];
            if (!this.compare(lval, val) && (rval == undefined || !this.compare(rval, val))) {
                break;
            }
            else {
                if (rval == undefined || this.compare(lval, rval)) {
                    this.tree[i] = lval;
                    this.map.set(lval, i);
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    this.map.set(rval, i);
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree[i] = val;
        this.map.set(val, i);
    }

    update(i, val) {
        this.tree[i] = val;
        this.map.set(val, i);
    }
}

var trapRainWater = function (heightMap) {
    const [m, n] = [heightMap.length, heightMap[0].length];
    if (m < 3 || n < 3) return 0;

    const coords = Array.from({ length: m }, (_, y) => Array.from({ length: n }, (_, x) => [x, y]));
    const availables = Array.from({ length: m }, () => Array.from({ length: n }, () => true));
    const heap = new Heap(([x1, y1], [x2, y2]) => heightMap[y1][x1] < heightMap[y2][x2]);

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
                let states = [top];
                while (states.length) {
                    const state2 = [];
                    for (const [x, y] of states) {
                        for (const [ox, oy] of dirs) {
                            const [nx, ny] = [x + ox, y + oy];
                            const nextVal = heightMap[ny][nx];
                            if (nextVal > val) {
                                minHeight = Math.min(minHeight, nextVal);
                            }
                            else {
                                if (nx == 0 || nx == n - 1 || ny == 0 || ny == m - 1) {
                                    throw "";
                                }
                                else {
                                    if (!availables[ny][nx]) {
                                        throw "";
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
                for (const coord of visited) {
                    const [x, y] = coord;
                    heightMap[y][x] += (minHeight - val);
                    heap.changeDown(coord);
                }
            } catch (e) {
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

run([[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]])
run([[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]]);