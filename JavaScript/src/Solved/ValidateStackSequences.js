// https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
var Test = require('../Common/Test');

var validateStackSequences = function (pushed, popped) {
    const stack = [];
    popped = popped.values();
    let next = popped.next();
    for (const num of pushed) {
        stack.push(num);
        while (!next.done && next.value == stack[stack.length - 1]) {
            stack.pop();
            next = popped.next();
        }
    }
    return stack.length == 0;
};

function test(pushed, popped) {
    Test.test(validateStackSequences, pushed, popped);
}

test([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
test([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);