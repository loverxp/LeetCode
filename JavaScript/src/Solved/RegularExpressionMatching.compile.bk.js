// https://leetcode-cn.com/problems/regular-expression-matching/
var Test = require('../Common/Test');
const { startsWith } = require('lodash');

var isMatch = function (s, p) {
    // const len1 = p.length;
    // const len2 = s.length;

    // const states = [new Map()];
    const startState = new Map();
    const parents = new Map();
    const stateCharMap = new Map();
    const stateArray = [startState];        //TODO:

    // let parentState;
    let lastState = startState;

    for (let i = 0; i < p.length; i++) {
        const char = p[i];

        // }
        // for (const char of p) {
        if (char == '*') {
            lastState.set(p[i - 1], lastState);
        }
        else {
            // const lastState = states[states.length - 1];
            const state = new Map();
            stateCharMap.set(state, char);
            stateArray.push(state);
            // lastState = new Map();
            // states.push(state);
            lastState.set(char, state);
            parents.set(state, lastState);
            let prevState = lastState;

            // do {

            // } while (prevState.has(prevState));
            // while (prevState.has(prevState)) {
            while (prevState.has(stateCharMap.get(prevState))) {
                // console.log("??");
                prevState = parents.get(prevState);
                prevState.set(char, state);
            }
            lastState = state;
        }
    }

    console.log(stateArray);

    // return parents;
    let state = startState;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // if (!state.has(char) || !state.has('.')) return false;
        state = state.get(char) || state.get('.');
        if (!state) return false;
    }
    // console.log(state);
    return state == lastState;


    // return stateArray;
};

function test(s, p) {
    Test.test(isMatch, s, p);
}

// test("aa", "a");
// test("aa", "a*");
test("aa", "a*a");
// test("ab", ".*");
// test("aab", "c*a*b");
// test("mississippi", "mis*is*p*.");