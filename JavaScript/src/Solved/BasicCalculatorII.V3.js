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
    const calc = (op, b, a) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return Math.trunc(a / b);
        }
    }
    const rpn = [];
    const ops = [];
    for (const token of tokens) {
        if (/\d+/.test(token)) {
            rpn.push(Number(token));
        }
        else {
            while (ops.length > 0 && priorities[token] <= priorities[ops[ops.length - 1]]) {
                rpn.push(calc(ops.pop(), rpn.pop(), rpn.pop()));
            }
            ops.push(token);
        }
    }
    return rpn[0];
};

function test(s) {
    Test.test(calculate, s);
}

test("3+2*2");
test(" 3/2 ");
test(" 3+5 / 2 ");
test("1+1+1");
