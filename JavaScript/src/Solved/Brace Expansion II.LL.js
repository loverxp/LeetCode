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

    let i = 0;
    // return dfs(0, new Set(), new Set());
    // return dfs(0, new Set());

    // function dfs(i, prefix) {

    function parse(expr) {

    }

    function parseExpression(prefix) {
        const char = expression[i++];
        // let result ;
        switch (char) {
            case '{':
                // const result = parseExpression();
                // i++;
                // return result;
                // return parseExpression();
                result = parseExpression();
                break;

            case ',':
                break;

            default:
                break;

            // default:
            //     const set = new Set();
            //     ++i;
            //     while (i < n && expression[i] != '}') {
            //         const char = expression[i];
            //         switch (char) {
            //             case '{':
            //                 break;
            //             case ',':
            //                 break;
            //             default:
            //                 break;
            //         }

            //     }
            //     break;
        }
        // if (expression[i] == '{') {
        // return 

        // }
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
// run("a")
run("{a}")
