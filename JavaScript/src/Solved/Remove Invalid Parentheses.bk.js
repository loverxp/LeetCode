const { first } = require('lodash');
// https://leetcode-cn.com/problems/remove-invalid-parentheses/
var Test = require('./Common/Test');

var removeInvalidParentheses = function (s) {
    // return calcRemoveLength();
    const redundancies = calcRedundancies();

    // return redundants;
    console.log({ redundancies });
    let firstLeftBrackat = redundancies.findIndex(i => s[i] == '(');
    firstLeftBrackat = firstLeftBrackat == -1 ? redundancies.length : firstLeftBrackat;
    // return firstLeftBrackat;
    console.log({ firstLeftBrackat });
    // return;
    // /*
    const candidateRights = [];
    // for (let i = 0; i < firstLeftBrackat; i++) {
    if (firstLeftBrackat > 0) {
        for (let i = 0; i <= redundancies[firstLeftBrackat - 1]; i++) {
            if (s[i] == ')') {
                candidateRights.push(i);
            }
        }
    }

    const candidateLefts = [];
    for (let i = redundancies[firstLeftBrackat]; i < s.length; i++) {
        if (s[i] == '(') {
            // console.log({i});
            candidateLefts.push(i);
        }
    }
    console.log({ candidateRights });
    console.log({ candidateLefts });
    // */

    // let strs = new Set();
    let prefixes = new Map();
    prefixes.set("", 0);
    for (let i = 0; i < firstLeftBrackat; i++) {
        console.log();
        console.log({ i });
        console.log({ prefixes });
        const index = redundancies[i];
        console.log({ index });
        const prefixes2 = new Map();
        for (const [prefix, start] of prefixes) {
            console.log();
            console.log({ prefix, start });

            // for (let j = 0; j <= index; j++) {
            // for (let j = 0; j < candidateRights.length && candidateRights[j] <= index; j++) {
            for (let j = start; j < candidateRights.length && candidateRights[j] <= index; j++) {
                // const str = prefix + s.substring(start, j);
                // const str = prefix + s.substring(start, candidateRights[j]);

                // const str = prefix + s.substring(candidateRights[start] + 1, candidateRights[j] + 1);
                const str = prefix + s.substring(prefix.length + i, candidateRights[j]);

                console.log({ str });
                // prefixes2.set(str, j + 1);
                prefixes2.set(str, j + 1);
                // prefixes2.set(str, candidateRights[j] + 1);
            }
        }
        prefixes = prefixes2;
    }
    // return prefixes;
    console.log({ prefixes });

    const prefixes2 = new Map();
    for (const [prefix, _] of prefixes) {
        // prefixes2.set(prefix + s.substring(start, redundancies[firstLeftBrackat]), redundancies[firstLeftBrackat]);
        prefixes2.set(prefix + s.substring(prefix.length + firstLeftBrackat, redundancies[firstLeftBrackat]), 0);
    }
    prefixes = prefixes2;
    // return prefixes;

    for (let i = firstLeftBrackat; i < redundancies.length; i++) {
        const leftRedundant = redundancies.length - i - 1;
        const index = redundancies[i];
        console.log();
        console.log({ i, index, leftRedundant });
        console.log(prefixes);
        const prefixes2 = new Map();
        for (const [prefix, start] of prefixes) {
            // for (let j = 0; j < candidateLefts.length && candidateLefts[j] <= index; j++) {
            for (let j = start; j < candidateLefts.length - leftRedundant; j++) {
                const candidate = candidateLefts[j];
                console.log('j');
                if (candidate >= index) {
                    // console.log("..");
                    const str = prefix + s.substring(prefix.length + i, candidate);
                    console.log({ str });
                    // prefixes2.set(str, Math.max(j+1,)
                    prefixes2.set(str, j + 1);
                }
            }
        }
        prefixes = prefixes2;
    }
    // const prefixes2 = new Map();
    const set = new Set();
    for (const [prefix, start] of prefixes) {
        //     // prefixes2.set(prefix + s.substring(start, redundancies[firstLeftBrackat]), redundancies[firstLeftBrackat]);
        //     prefixes2.set(prefix + s.substring(prefix.length + firstLeftBrackat, redundancies[firstLeftBrackat]), 0);
        // prefixes2.set(prefix)
        set.add(prefix + s.substring(prefix.length + redundancies.length, s.length));
    }
    // prefixes = prefixes2;

    // return set;
    return [...set];
    return prefixes;
    return [...prefixes.keys()];

    function calcRedundancies() {
        const stack = [];
        // const pos = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char == '(') {
                // stack.push(char);
                stack.push(i);
            }
            if (char == ')') {
                if (stack.length && (index = stack[stack.length - 1], s[index] == '(')) {
                    stack.pop();
                }
                else {
                    stack.push(i);
                    // stack.push(char);
                    // os.push(i);
                }
            }
        }
        return stack;
        // return [stack, pos];
    }

};

function run(s) {
    Test.run(removeInvalidParentheses, s);
}

run("()())()")
// run("(a)())()")
// run(")(")

// run("())()(()")
// run("()())())");
// run("(()((()()");
// run("(()(()(()");