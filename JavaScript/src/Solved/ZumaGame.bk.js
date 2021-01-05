// https://leetcode-cn.com/problems/zuma-game/
var Test = require('./Common/Test');
var { Counter } = require('./Common/Counter');
var { Queue } = require('./Common/Queue');

Test.isLogOn = false;

var findMinStep = function (balls, hand) {
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
        Test.log();
        Test.log();
        Test.log("while start!--------------------------------------------------------------------------------");
        // Test.log(states[0]);
        // Test.log(states[1]);
        Test.log("state length:", states.length);
        Test.log({ steps });


        const states2 = [];
        for (const [balls, inHand] of states) {
            Test.log();
            Test.log("for state start!----------------------------------------");
            Test.log({ balls });
            Test.log({ inHand });

            if (balls.length == 0) {
                console.log();
                console.log();
                console.log({ count });
                return steps;
            }
            else {
                // for (const [color, count] of inHand) {
                for (const [color, _] of inHand) {
                    Test.log("for inHand start!--------------------")
                    Test.log({ color });

                    let nextInHand;

                    // for (let i = 0; i < balls.length - 1; i++) {
                    for (let i = 0; i < balls.length; i++) {
                        Test.log({ i });
                        count++;
                        // console.log({ count });

                        if (color == balls[i]) {
                            let nextBalls;
                            if (color == balls[i + 1]) {
                                Test.log("match!");
                                nextBalls = balls.slice(0, i);

                                // if (color == balls[i] && color == balls[i + 1]) {
                                //  nextBalls = balls.slice(0, i);

                                for (let j = i + 2; j < balls.length; j++) {
                                    nextBalls.push(balls[j]);
                                }

                                Test.log({ nextBalls });
                                // Test.log('1');
                                let j = i;

                                // if (nextBalls.length) {

                                let keepOn;
                                do {
                                    keepOn = false;
                                    // if (nextBalls.length) {

                                    const color = nextBalls[j];
                                    // if (color == nextBalls[j - 1]) {
                                    if (color != undefined && color == nextBalls[j - 1]) {
                                        const start = color == nextBalls[j - 2] ? j - 2 : j - 1;
                                        const end = color == nextBalls[j + 1] ? j + 1 : j;
                                        // console.log({ start, end });
                                        if (end - start > 1) {
                                            nextBalls.splice(start, end - start + 1);
                                            // nextBalls.splice(start, end - start );
                                            j = start;
                                            keepOn = true;
                                        }
                                    }
                                    // }
                                    // Test.log({ nextBalls });
                                } while (keepOn);
                                // }

                                // Test.log('2');
                                i += 2;
                            }
                            else {
                                Test.log("no match!");
                                nextBalls = balls.slice();
                                nextBalls.splice(i, 0, color);
                            }

                            // Test.log({ i, nextBalls });
                            Test.log({ nextBalls });

                            // const nextInHand = new Counter(inHand);             //TODO:to be optimized!
                            if (!nextInHand) {
                                nextInHand = new Counter(inHand);
                                nextInHand.dec(color);
                            }
                            Test.log({ nextInHand });

                            // const key = nextBalls.toString() + ',' + nextInHand.join('');
                            const key = nextBalls.toString() + ',' + JSON.stringify([...nextInHand]);
                            if (!stateKeys.has(key)) {
                                // Test.log({ key });
                                stateKeys.add(key);
                                states2.push([nextBalls, nextInHand]);              //TODO: may be duplicate
                            }

                        }
                    }
                }
            }
        }
        states = states2;
        steps++;
    }

    console.log({ count });
    return -1;
};

function test(board, hand) {
    Test.test(findMinStep, board, hand);
}

// test("WRRBBW", "RB");
// test("WWRRBBWW", "WRBRW");
// test("G", "GGGGG");
// test("RBYYBBRRB", "YRBGB");
test("RRWWRRBBRR", "WB");

// test("WWBBWW", "B");
// test("WBBWW", "B");
// test("WWBBW", "B");
