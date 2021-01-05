// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
var Test = require('../Common/Test');
const { result } = require('lodash');

var evalRPN = function (tokens) {
    const stack = [];
    for (const token of tokens) {
        if ("+-*/".includes(token)) {
            const a = stack.pop();
            const b = stack.pop();
            let result;
            switch (token) {
                case '+': result = b + a; break;
                case '-': result = b - a; break;
                case '*': result = b * a; break;
                case '/': result = Math.trunc(b / a); break;
            }
            stack.push(result);
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