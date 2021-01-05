// https://leetcode-cn.com/problems/swim-in-rising-water/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

class UniqPriorityXYQueue {
    constructor(compare) {
        this.queue = [];
        this.uniqKeys = new Set();
        this.compare = compare;
        this.length = 0;
    }

    push(xy) {
        const key = `${xy[0]},${xy[1]}`;
        if (!this.uniqKeys.has(key)) {
            this.uniqKeys.add(key);
            this.queue.push(xy);
            this.queue.sort(this.compare);
            this.length++;
        }
    }

    pop() {
        if (this.queue.length) {
            const xy = this.queue.shift();
            this.length--;
            return xy;
        }
    }
}

var swimInWater = function (grid) {
    const offsets = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const n = grid.length;
    const times = Array(n).fill().map(_ => Array(n).fill(Infinity));
    times[0][0] = grid[0][0] > grid[n - 1][n - 1] ? grid[0][0] : grid[n - 1][n - 1];

    const starts = new UniqPriorityXYQueue(([x1, y1], [x2, y2]) => grid[y1][x1] - grid[y2][x2]);
    starts.push([0, 0]);

    while (starts.length) {
        console.log(starts);
        const [x, y] = xy = starts.pop();
        console.log({ xy });
        const time = times[y][x];
        let positions = [xy];
        while (positions.length) {
            const positions2 = [];
            for (const [x, y] of positions) {
                for (const [ox, oy] of offsets) {
                    const [nx, ny] = nextXY = [x + ox, y + oy];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        if (nx == n - 1 && ny == n - 1) {
                            return time;
                        }
                        else {
                            if (time < grid[ny][nx]) {
                                if (grid[ny][nx] < times[ny][nx]) {
                                    times[ny][nx] = grid[ny][nx];
                                    starts.push(nextXY);       
                                }
                            }
                            else {
                                if (time < times[ny][nx]) {
                                    times[ny][nx] = time;
                                    positions2.push(nextXY);    
                                }
                            }
                        }
                    }
                }
            }
            positions = positions2;
        }
    }
    return Infinity;
};

function test(grid) {
    Matrix.logMatrixInArray(grid);
    Test.test(swimInWater, grid);
}

test([[0, 2], [1, 3]]);
test([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]);