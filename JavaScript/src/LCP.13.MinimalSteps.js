// https://leetcode-cn.com/problems/xun-bao/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');


class Node {
    constructor(val) {
        this.val = val;
    }
}

class Queue {
    constructor() {
        this.root = new Node();
        this.last = this.root;
    }

    push(o) {
        this.last.next = new Node(o);
        this.last = this.last.next;
    }

    pop() {
        if (this.last != this.root) {
            const next = this.root.next;
            const val = next.val;
            this.root.next = next.next;
            if (next == this.last) this.last = this.root;
            return val;
        }
        return undefined;
    }
}

var minimalSteps = function (maze) {
    const [width, height] = [maze[0].length, maze.length];
    let start, target;
    const triggers = [];
    const piles = [];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const char = maze[i][j];
            const coord = [j, i];
            switch (char) {
                case 'S': start = coord; break;
                case 'T': target = coord; break;
                case 'M': triggers.push(coord); break;
                case 'O': piles.push(coord); break;
                default: break;
            }
        }
    }

    if (triggers.length == 0) {
        return bfs(start, target);
    }
    else {

    }

    function bfs(start, target) {
        const offsets = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        const [sx, sy] = start;
        const [tx, ty] = target;
        const steps = Array(height).fill().map(_ => Array(width).fill(Infinity));
        steps[sy][sx] = 0;
        const queue = new Queue();
        queue.push(start);
        while (queue.length > 0) {
            const [x, y] = queue.pop();
            const step = steps[y][x] + 1;
            if (x == tx && y == ty) {
                return step;
            }
            else {
                for (const [ox, oy] of offsets) {
                    const [nx, ny] = nextXY = [x + ox, y + oy];
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        if (maze[ny][nx] != '#' && step < steps[ny][nx]) {
                            steps[ny][nx] = step;
                            queue.push(nextXY);
                        }
                    }
                }
            }
        }
        return -1;
    }
};

function test(maze) {
    Matrix.logMatrixInString(maze);
    Test.test(minimalSteps, maze);
}

test(["S#O", "M..", "M.T"]);
test(["S#O", "M.#", "M.T"]);
test(["S#O", "M.T", "M.."]);