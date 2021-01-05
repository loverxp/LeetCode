// https://leetcode-cn.com/problems/zuma-game/
var Test = require('../Common/Test');
// var { Counter } = require('./Common/Counter');
var { Queue } = require('../Common/Queue');


class Counter {
    constructor(param) {
        if (param != undefined && param instanceof Counter) {
            this.counter = new Map(param.counter);
        }
        else {
            this.counter = new Map(param);
        }
    }

    [Symbol.iterator]() {
        return this.counter.entries();
    }

    set(key) {
        this.counter.set(key);
    }

    get(key) {
        return this.counter.get(key);
    }

    inc(key) {
        if (!this.counter.has(key)) {
            this.counter.set(key, 1);
        }
        else {
            this.counter.set(key, this.counter.get(key) + 1);
        }
    }

    dec(key) {
        const count = this.counter.get(key);
        if (count > 1) {
            this.counter.set(key, count - 1);
        }
        else {
            this.counter.delete(key);
        }
    }
}

var findMinStep = function (balls, hand) {
    // if ("RRWWRRBBRR" == balls && hand == "WB") return 2;
    const colorMap = new Map(['R', 'Y', 'B', 'G', 'W'].map((color, i) => [color, i]));
    const inHand = new Counter();
    for (const color of hand) {
        inHand.inc(color);
    }
    let count = 0;
    let steps = 0;
    let states = [[balls.split(''), inHand]];
    const stateKeys = new Set();
    while (states.length) {
        const states2 = [];
        for (const [balls, inHand] of states) {
            if (balls.length == 0) {
                return steps;
            }
            else {
                for (const [color, _] of inHand) {
                    let nextInHand;
                    for (let i = 0; i < balls.length; i++) {
                        count++;
                        if (color == balls[i]) {
                            let nextBalls;
                            if (color == balls[i + 1]) {
                                nextBalls = balls.slice(0, i);
                                for (let j = i + 2; j < balls.length; j++) {
                                    nextBalls.push(balls[j]);
                                }
                                let j = i;
                                let keepOn;
                                do {
                                    keepOn = false;
                                    const color = nextBalls[j];
                                    if (color != undefined && color == nextBalls[j - 1]) {
                                        const start = color == nextBalls[j - 2] ? j - 2 : j - 1;
                                        const end = color == nextBalls[j + 1] ? j + 1 : j;

                                        if (end - start > 1) {
                                            nextBalls.splice(start, end - start + 1);
                                            j = start;
                                            keepOn = true;
                                        }
                                    }

                                } while (keepOn);
                                i += 2;
                            }
                            else {
                                nextBalls = balls.slice();
                                nextBalls.splice(i, 0, color);
                            }
                            if (!nextInHand) {
                                nextInHand = new Counter(inHand);
                                nextInHand.dec(color);
                            }

                            const key = nextBalls.toString() + ',' + JSON.stringify([...nextInHand]);
                            if (!stateKeys.has(key)) {
                                stateKeys.add(key);
                                states2.push([nextBalls, nextInHand]);
                            }
                        }
                    }
                }
            }
        }
        states = states2;
        steps++;
    }

    return -1;
};

function test(board, hand) {
    Test.test(findMinStep, board, hand);
}

// test("WRRBBW", "RB");
// test("WWRRBBWW", "WRBRW");
// test("G", "GGGGG");
// test("RBYYBBRRB", "YRBGB");
// test("RBYYBBRRB", "YRBGB");
// test("RBYYBBRRB", "YRBGB");
test("RRWWRRBBRR", "WB");
// test("RRYGGYYRRYGGYYRR", "GGBBB");

// test("WWBBWW", "B");
// test("WBBWW", "B");
// test("WWBBW", "B");
