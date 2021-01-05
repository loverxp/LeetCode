// https://leetcode-cn.com/problems/brace-expansion-ii/
var Test = require('./Common/Test');

class Stack extends Array {
    top() {
        return this[this.length - 1];
    }
}

var braceExpansionII = function (expression) {
    const n = expression.length;

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

    const stack1 = new Stack(new Set());
    const stack2 = new Stack();

    for (let i = 0; i < n; i++) {
        const char = expression[i];
        switch (char) {
            case '{':
                stack1.push(new Set());
                stack2.push('{');
                break;

            case '}': {
                appendPrefix(stack1.top(), stack2.pop());
                stack2.pop();   // '{'

                if (stack2.top() && stack2.top() != '{') {
                    const top1 = stack1.pop();
                    const top2 = stack2.pop();
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
                }
                break;
            }

            case ',': {
                appendPrefix(stack1.top(), stack2.pop());
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
                else if (stack2.top() && stack2.top() != '{') {
                    stack2.push(stack2.pop() + char);
                }
                else {
                    stack2.push(char);
                }
                break;
        }
    }

    appendPrefix(stack1.top(), stack2.pop());
    return [...stack1[0]].sort();
};

function run(expression) {
    Test.run(braceExpansionII, expression);
}

run("{a,b}{c,{d,e}}")
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
run("a")
run("abcd")