// https://leetcode-cn.com/problems/remove-invalid-parentheses/
var Test = require('../Common/Test');

var removeInvalidParentheses = function (s) {
    const [redundancies, mid] = calcRedundancies();
    return handleLast(handleRight(handleMiddle(handleLeft())));

    function calcRedundancies() {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char == '(') {
                stack.push(i);
            }
            if (char == ')') {
                if (stack.length && (index = stack[stack.length - 1], s[index] == '(')) {
                    stack.pop();
                }
                else {
                    stack.push(i);
                }
            }
        }
        let mid = stack.findIndex(i => s[i] == '(');
        return [stack, mid = mid == -1 ? stack.length : mid];
    }

    function handleLeft() {
        const candidates = [];
        if (mid > 0) {
            for (let i = 0; i <= redundancies[mid - 1]; i++) {
                if (s[i] == ')') {
                    candidates.push(i);
                }
            }
        }

        let prefixes = new Map();
        prefixes.set("", 0);
        for (let i = 0; i < mid; i++) {
            const index = redundancies[i];
            const prefixes2 = new Map();
            for (const [prefix, start] of prefixes) {
                for (let j = start; j < candidates.length && candidates[j] <= index; j++) {
                    const str = prefix + s.substring(prefix.length + i, candidates[j]);
                    prefixes2.set(str, j + 1);
                }
            }
            prefixes = prefixes2;
        }
        return prefixes;
    }

    function handleMiddle(prefixes) {
        const prefixes2 = new Map();
        for (const [prefix, _] of prefixes) {
            prefixes2.set(prefix + s.substring(prefix.length + mid, redundancies[mid]), 0);
        }
        prefixes = prefixes2;
        return prefixes;
    }

    function handleRight(prefixes) {
        const candidates = [];
        for (let i = redundancies[mid]; i < s.length; i++) {
            if (s[i] == '(') {
                candidates.push(i);
            }
        }
        for (let i = mid; i < redundancies.length; i++) {
            const leftRedundant = redundancies.length - i - 1;
            const index = redundancies[i];
            const prefixes2 = new Map();
            for (const [prefix, start] of prefixes) {
                for (let j = start; j < candidates.length - leftRedundant; j++) {
                    const candidate = candidates[j];
                    if (candidate >= index) {
                        const str = prefix + s.substring(prefix.length + i, candidate);
                        prefixes2.set(str, j + 1);
                    }
                }
            }
            prefixes = prefixes2;
        }
        return prefixes;
    }

    function handleLast(prefixes) {
        const set = new Set();
        for (const [prefix, start] of prefixes) {
            set.add(prefix + s.substring(prefix.length + redundancies.length, s.length));
        }
        return [...set];
    }
};

function run(s) {
    Test.run(removeInvalidParentheses, s);
}

run("()())()")
run("(a)())()")
run(")(")

run("())()(()")
run("()())())");
run("(()((()()");
run("(()(()(()");