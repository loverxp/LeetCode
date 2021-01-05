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

    // const stack = [new Set()];
    const stack1 = new Stack();
    const stack2 = new Stack(new Set());

    return stack1;
    
    // for (let i = 1; i < n - 1; i++) {
    // for (let i = 0; i < n - 1; i++) {
    for (let i = 0; i < n; i++) {
        console.log();
        console.log(stack1);
        const char = expression[i];
        switch (char) {
            case '{':
                stack1.push(new Set());
                break;

            case '}': {
                // const set = stack.pop();
                // console.log({ set });
                // let set2 = set;
                const last = stack1[stack1.length - 1];
                if (typeof last === "string") {
                    stack1.pop();
                    stack1[stack1.length - 1].add(last);
                    // const set = stack.pop();
                    // set2 = new Set();
                    // for (const str of stack.pop()) {
                    // last.add(str);
                    // stack[stack.length - 1].add(last + str);
                    // }
                }
                // else {
                // const set = stack.pop();
                for (const str of stack1.pop()) {
                    stack1[stack1.length - 1].add(str);
                }
                // }
                // if (last instanceof Set) {
                //     for (const e of set) {
                //         last.add(e);
                //     }
                // }
                // else {
                //     // const char = stack.pop();
                //     // stack[stack.length - 1].add(char);
                // }
                // if (isLetter(char)) {

                // }

                // if (i + 1 < n) {
                // const char = expression[i + 1];
                // if (isLetter(char)) {
                //     let j = stack.length - 1;
                //     while (isLetter(expression[j])) {
                //         expression[j++] += char;
                //     }
                //     stack.push('}');
                // }
                // }
                break;
            }

            case ',': {
                const char = stack1.pop();
                stack1[stack1.length - 1].add(char);
                // stack.push(char);
                break;
            }
            // case isLetter(char):
            // break;

            // case '$':
            // break;

            default:    // letters
                stack1.push(char);
                // stack[stack.length - 1].add(char);
                break;
        }
    }

    console.log({ stack: stack1 });
    const last = stack1[stack1.length - 1];
    if (typeof last === 'string') {
        stack1.pop();
        stack1[0].add(last);
    }

    return [...stack1[0]];


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

function testBind() {
    const module = {
        x: 42,
        getX: function () {
            return this.x;
            // return 10;
            // return this;
        }
    };
    const getX = module.getX.bind(module);
    console.log(getX());
}

// testBind();
// class Stack {

// }

function testClass() {
    //     console.log(Stack);
    const o = new (Stack.bind([1, 2, 3]))
    console.log({o});
}

// testClass();