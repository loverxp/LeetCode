// https://leetcode-cn.com/problems/basic-calculator/
var Test = require('./Common/Test');

var calculate = function (s) {
    const tokens = s.replace(/([-/+*()])/g, " $1 ").replace(/ +/g, ' ').trim().split(' ');
    tokens.push('$');
    console.log(tokens);
    const calc = (op, b, a) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
        }
    }
    const rpn = [];
    const ops = [];
    for (const token of tokens) {
        console.log();
        console.log(rpn);
        console.log(ops);
        if (/\d+/.test(token)) {
            rpn.push(Number(token));
        }
        else if (token == '(') {
            ops.push(token);
        }
        else {
            while (ops.length > 0) {
                const op = ops[ops.length - 1];
                if (op == '(') {
                    if (token == ')') {
                        ops.pop();
                        // token = '.';
                    }
                    // else {
                        break;
                    // }
                }
                else {
                    rpn.push(calc(ops.pop(), rpn.pop(), rpn.pop()));
                }
            }
            if (token != ')') ops.push(token);
        }
    }
    return rpn[0];
};

function test(s) {
    Test.test(calculate, s);
}

// test("1 + 1");
// test(" 2-1 + 2 ");
// test("(1+(4+5+2)-3)+(6+8)");
test("2-4-(8+2-6+(8+4-(1)+8-10))");
// test("2-4-(8+2-6+(8+4-(3-2)+8-10))");
// test("2-4-(8+2-6+(8+4-1+8-10))");

// [ -2, 4, 12, 1 ]
// [ '-', '(', '+', '(', '-' ]
// [ -2, 4, 11 ]
// [ '-', '(', '+', '(', '+' ]

// [ -2, 4, 12, 1 ]
// [ '-', '(', '+', '(', '-', '(' ]
// [ -17 ]
// []