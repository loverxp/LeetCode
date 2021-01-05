// https://leetcode-cn.com/problems/regular-expression-matching/
var Test = require('../Common/Test');
const { last } = require('lodash');

var isMatch = function (s, p) {
    return testString(s, createStateMachine(p));

    function createStateMachine(p) {
        const startState = new Map();
        const parents = new Map();
        const selfTransitSet = new Set();
        const stateArray = [startState];        //TODO: for debugging

        let lastState = startState;
        for (let i = 0; i < p.length; i++) {
            const char = p[i];

            if (char == '*') {
                // lastState.set(p[i - 1], lastState);
                lastState.set(p[i - 1], new Set([lastState]));
                // const prevChar = p[i - 1];
                // if (lastState.has(prevChar)) {
                //     console.log(lastState.get(prevChar));
                //     lastState.get(prevChar).add(lastState);
                // }
                // else {
                //     lastState.set(prevChar, new Set([lastState]));
                // }

                selfTransitSet.add(lastState);
            }
            else {
                const state = new Map();
                stateArray.push(state);     //TODO: for debugging
                // lastState.set(char, state);
                // const stateSet = new Set();
                // stateSet.add(state);
                if (lastState.has(char)) {
                    lastState.get(char).add(state);
                }
                else {
                    lastState.set(char, new Set([state]));
                }
                // lastState.set(char, stateSet);

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
                    // prevState.set(char, state);
                }
                lastState = state;
            }
        }

        console.log("selfTransitSet:");
        console.log(selfTransitSet);
        console.log();
        console.log(stateArray);         //TODO: for debugging
        // return startState;
        return [startState, lastState];
    }

    function testString(s, [startState, lastState]) {
        // let state = startState;
        // for (let i = 0; i < s.length; i++) {
        // const char = s[i];
        // for (const char of s) {
        //     state = state.get(char) || state.get('.');
        //     if (!state) return false;
        // }
        // let states = [startState];
        let states = new Set([startState]);
        // let iter = s[Symbol.iterator]().next();
        let iter = s[Symbol.iterator]();
        let next = iter.next();
        while (!next.done && states.size) {
            console.log();
            console.log({ next });
            console.log(states);
            const states2 = new Set();
            // const char = iter.value;
            const char = next.value;
            for (const state of states) {
                let nextStates = state.get(char);
                if (nextStates) {
                    // for (const nextState of state.get(char)) {
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
            // iter = iter.next();
            next = iter.next();
        }

        console.log({ next });
        console.log({ states });
        return next.done && states.has(lastState);

        // return state == lastState;
    }
};

function test(s, p) {
    Test.test(isMatch, s, p);
}

// test("aa", "a");
// test("aa", "a*");
// test("aa", "a*a");
// test("ab", ".*");
// test("aab", "c*a*b");
// test("aa", "c*a*");
// test("ca", "c*a");
// test("a", "c*a");
test("aaa", "a*a");
// test("mississippi", "mis*is*p*.");
// test("mississppi", "mis*is*p*.");
// test("mississi", "mis*is*p*.");