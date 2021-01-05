// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
var Test = require('../Common/Test');

var evalRPN = function (tokens) {
    const stack = [];
    const calc = (op, b, a) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return Math.trunc(a / b);
        }
    }
    for (const token of tokens) {
        if ("+-*/".includes(token)) {
            stack.push(calc(token, stack.pop(), stack.pop()));
        }
        else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};

function test(tokens) {
    Test.test(evalRPN, tokens);
}

test(["2", "1", "+", "3", "*"]);
test(["4", "13", "5", "/", "+"]);
test(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
test(["4", "-2", "/", "2", "-3", "-", "-"])