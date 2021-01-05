const { get } = require('lodash');
// https://leetcode-cn.com/problems/brace-expansion-ii/
var Test = require('./Common/Test');

class Stack extends Array {
    top() {
        return this[this.length - 1];
    }
}

var braceExpansionII = function (expression) {
    const n = expression.length;
    // const isLetter = (char) => /[a-z]/.test(char);

    const isString = (o) => typeof last === 'string';
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
    // const braceStack = new Stack();
    // const setStack = new Stack(new Set());
    const stack = new Stack(new Set());

    for (let i = 0; i < n; i++) {
        const char = expression[i];
        switch (char) {
            case '{':
                stack.push('{');
                stack.push(new Set());
                break;

            case '}':
                const top = stack.top();
                // if (top == '}') {

                // }

                if (isString(top)) {

                }
                break;

            case ',': {
                const char = stack.pop();
                stack.top().add(char);
                break;
            }

            default:
                stack.push(char);
                break;
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
