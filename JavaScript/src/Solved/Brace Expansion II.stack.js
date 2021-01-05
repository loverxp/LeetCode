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

    const isValid = (prefix) => (typeof prefix === 'string') || (prefix instanceof Set);

    // const stack1 = new Stack();
    const stack1 = new Stack(new Set());
    const stack2 = new Stack();

    // return stack1;

    for (let i = 0; i < n; i++) {
        console.log();
        console.log({ stack1 });
        console.log({ stack2 });
        const char = expression[i];
        console.log({ char });
        switch (char) {
            case '{':
                stack1.push(new Set());
                stack2.push('{');
                break;

            case '}': {
                // if (stack2.top() == '{') {
                // stack2.pop();
                // }
                // else {
                appendPrefix(stack1.top(), stack2.pop());
                // }
                stack2.pop();   // '{'

                console.log({ stack1 });
                console.log({ stack2 });
                // if (isValid(stack2.top())) {
                if (stack2.top() && stack2.top() != '{') {
                    const top1 = stack1.pop();
                    const top2 = stack2.pop();
                    console.log({ top1, top2 });
                    // if (top2 instanceof Set) {
                    if (typeof top2 === 'string') {
                        const set = new Set();
                        for (const str of top1) {
                            set.add(top2 + str);
                        }
                        stack2.push(set);
                    }
                    else {
                        const set = new Set();
                        for (const str1 of top2) {
                            for (const str2 of top1) {
                                set.add(str1 + str2);
                            }
                        }
                        stack2.push(set);
                    }
                }
                else {
                    stack2.push(stack1.pop());
                    // stack2.push(top1);
                }

                // stack2.push(1);
                break;
            }

            case ',': {
                // const prefix = stack1.pop();
                // const set = stack1.pop();
                // appendPrefix(stack1.top(), stack1.pop());

                appendPrefix(stack1.top(), stack2.pop());
                // stack1[stack1.length - 1].add(char);
                // stack.push(char);
                break;
            }

            default:    // letters
                if (stack2.top() instanceof Set) {
                    const set = new Set();
                    for (const str of stack2.pop()) {
                        set.add(str + char);
                    }
                    stack2.push(set);
                }
                // else if (typeof stack2.top() === 'string' && stack2.top() != '{') {
                else if (stack2.top() != '{') {
                    stack2.push(stack2.pop() + char);
                }
                else {
                    stack2.push(char);
                }
                // stack1.push(char);
                // stack[stack.length - 1].add(char);
                break;
        }
    }

    console.log({ stack1 });
    console.log({ stack2 });
    // const last = stack1[stack1.length - 1];
    // if (typeof last === 'string') {
    //     stack1.pop();
    //     stack1[0].add(last);
    // }

    appendPrefix(stack1.top(), stack2.pop());

    return [...stack1[0]];


};

function run(expression) {
    Test.run(braceExpansionII, expression);
}

// run("{a,b}{c,{d,e}}")
run("{{a,z},a{b,c},{ab,z}}")

// run("{a,b}")
// run("{a,b},c")
// run("{{a,b},c},d")

// run("{a}c")
// run("{a,b}c")
// run("a{b,c}")

// run("{{a,b}c}d")
// run("a{b{c,d}}")

// run("{{{a,b}c}d}")
// run("{a,b}{c,d}")
// run("{{a,b}{c,d}}")
// run("{{a,b}{c,d}{e,f}}")

// run("{{{a}}}")
// run("{a,a}")
// run("a,a")
// run("a")
