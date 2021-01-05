// https://leetcode-cn.com/problems/regular-expression-matching/
var Test = require('../Common/Test');

var isMatch = function (s, p) {
    return testString(s, createStateMachine(p));

    function createStateMachine(p) {
        p += '$';
        const startState = new Map();
        const parents = new Map();
        const selfTransitSet = new Set();

        let lastState = startState;
        for (let i = 0; i < p.length; i++) {
            const char = p[i];

            if (char == '*') {
                lastState.set(p[i - 1], new Set([lastState]));
                selfTransitSet.add(lastState);
            }
            else {
                const state = new Map();
                if (lastState.has(char)) {
                    lastState.get(char).add(state);
                }
                else {
                    lastState.set(char, new Set([state]));
                }
                parents.set(state, lastState);
                let prevState = lastState;
                while (selfTransitSet.has(prevState)) {
                    prevState = parents.get(prevState);
                    if (prevState.has(char)) {
                        prevState.get(char).add(state);
                    }
                    else {
                        prevState.set(char, new Set([state]));
                    }
                }
                lastState = state;
            }
        }

        return [startState, lastState];
    }

    function testString(s, [startState, lastState]) {
        s += '$';
        let states = new Set([startState]);
        let iter = s[Symbol.iterator]();
        let next = iter.next();
        while (!next.done && states.size) {
            const states2 = new Set();
            const char = next.value;
            for (const state of states) {
                let nextStates = state.get(char);
                if (nextStates) {
                    for (const nextState of nextStates) {
                        states2.add(nextState);
                    }
                }
                nextStates = state.get('.');
                if (nextStates) {
                    for (const nextState of nextStates) {
                        states2.add(nextState);
                    }
                }
            }
            states = states2;
            next = iter.next();
        }

        return next.done && states.has(lastState);
    }
};

function test(s, p) {
    Test.test(isMatch, s, p);
}

// test("aa", "a");
test("aa", "a*");
// test("aa", "a*a");
// test("ab", ".*");
// test("aab", "c*a*b");
// test("aa", "c*a*");
// test("ca", "c*a");
// test("a", "c*a");
// test("aaa", "a*a");
test("mississippi", "mis*is*p*.");
test("mississppi", "mis*is*p*.");
test("mississi", "mis*is*p*.");
test("a", "ab*");