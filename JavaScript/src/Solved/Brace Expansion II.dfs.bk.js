const { get } = require('lodash');
// https://leetcode-cn.com/problems/brace-expansion-ii/
var Test = require('../Common/Test');

class Stack extends Array {
    top() {
        return this[this.length - 1];
    }
}

var braceExpansionII = function (expression) {
    const n = expression.length;
    // const isLetter = (char) => /[a-z]/.test(char);

    // const isString = (o) => typeof last === 'string';

    const appendSet = (set, set2) => {
        for (const str of set2) {
            set.add(str);
        }
        return set;
    }

    const appendPrefix = (set, prefix) => {
        if (typeof prefix === 'string') {
            set.add(prefix);
        }
        else {   // set
            appendSet(set, prefix);
        }
        return set;
    };

    // return dfs(0, new Set(), new Set());
    return dfs(0, new Set());

    // function dfs(i, prefix) {
    function dfs(i, set, prefix) {
        if (i == n) {
            return appendPrefix(set, prefix);
        }
        else {
            const char = expression[i];
            switch (char) {
                case '{':
                    // if (prefix) {

                    // }
                    // else {
                    //     // const result = dfs(i + 1, new Set());
                    //     // return appendSet(set, result);
                    //     return appendSet(set, dfs(i + 1, new Set()));
                    // }
                    return appendSet(set, dfs(i + 1, new Set(), prefix));
                // break;

                case '}':
                    return dfs(i + 1, null, set);
                    break;

                case ',':
                    // appendPrefix(set, prefix);
                    // return dfs(i + 1, set);

                    return dfs(i + 1, appendPrefix(set, prefix));

                default: {
                    // const set = new Set();

                    // dfs(i + 1, set, char);
                    break;
                }
            }
        }
    }

};

function run(expression) {
    Test.run(braceExpansionII, expression);
}

// run("{a,b}{c,{d,e}}")
// run("{{a,z},a{b,c},{ab,z}}")

// run("{a,b}")
// run("{a,b},c")
// run("{{a,b},c},d")
// run("{a,b}c")
// run("{{a,b}c}d")

// run("a{b,c}")
// run("a{b{c,d}}")

// run("{{{a,b}c}d}")
// run("{a,b}{c,d}")
// run("{{a,b}{c,d}}")
// run("{{a,b}{c,d}{e,f}}")

// run("{{{a}}}")
// run("{a,a}")
// run("a,a")
run("a")
