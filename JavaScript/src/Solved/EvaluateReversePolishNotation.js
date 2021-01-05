// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
var Test = require('../Common/Test');

var evalRPN = function (tokens) {
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

function test(tokens) {
    Test.test(evalRPN, tokens);
}

// test(["2", "1", "+", "3", "*"]);
// test(["4", "13", "5", "/", "+"]);
// test(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
test(["4", "-2", "/", "2", "-3", "-", "-"])