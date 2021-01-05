// https://leetcode-cn.com/problems/basic-calculator-ii/
var Test = require('../Common/Test');

var calculate = function (s) {
    const tokens = s.replace(/ /g, '').replace(/([-/+*])/g, " $1 ").split(' ');
    tokens.push('$');
    const priorities = {
        '$': 0,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    const rpn = [];
    const ops = [];
    for (const token of tokens) {
        if (/\d+/.test(token)) {
            rpn.push(token);
        }
        else {
            while (ops.length > 0 && priorities[token] <= priorities[ops[ops.length - 1]]) {
                rpn.push(ops.pop());
            }
            ops.push(token);
        }
    }

    return eval(rpn);

    function eval(tokens) {
        const stack = [];
        for (const token of tokens) {
            if ("+-*/".includes(token)) {
                stack.push(((a, b) => {
                    switch (token) {
                        case '+': return b + a;
                        case '-': return b - a;
                        case '*': return b * a;
                        case '/': return Math.trunc(b / a);
                    }
                })(stack.pop(), stack.pop()));

            }
            else {
                stack.push(Number(token));
            }
        }
        return stack[0];
    };
};

function test(s) {
    Test.test(calculate, s);
}

test("3+2*2");
test(" 3/2 ");
test(" 3+5 / 2 ");
test("1+1+1");
