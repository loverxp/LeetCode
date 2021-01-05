// https://leetcode-cn.com/problems/basic-calculator-ii/
var Test = require('./Common/Test');

var calculate = function (s) {
    const tokens = s.replace(/ /g, '').replace(/([-/+*])/g, " $1 ").split(' ');
    tokens.push('$');
    const stack = [];
    const calc = (op, a, b) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return Math.trunc(a / b);
        }
    }
    for (const token of tokens) {
        if (/\d+/.test(token)) {
            const op = stack[stack.length - 1];
            if (op != undefined && "*/".includes(op)) {
                stack.pop();
                stack.push(calc(op, stack.pop(), Number(token)));
            }
            else {
                stack.push(Number(token));
            }
        }
        else {
            if ("+-$".includes(token) && stack.length >= 3) {
                const num2 = stack.pop();
                const op = stack.pop();
                const num1 = stack.pop();
                stack.push(calc(op, num1, num2));
            }
            stack.push(token);
        }
    }
    return stack[0];
};

function test(s) {
    Test.test(calculate, s);
}

test("3+2*2");
test(" 3/2 ");
test(" 3+5 / 2 ");
test("1+1+1");
