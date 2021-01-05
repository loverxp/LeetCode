// https://leetcode-cn.com/problems/longest-valid-parentheses/
var Test = require('./Common/Test');

var longestValidParentheses = function (s) {
    // let maxLength = 0;
    // let length = 0;
    // let prevLength = 0;
    const stack = [];
    // const stack2 = [];
    // const updateTop = () => {
    //     if (stack.length && !isNaN(stack[stack.length - 1])) {
    //         stack[stack.length - 1] += 2;
    //         return true;
    //     }
    //     return false;
    // }
    for (let i = 0; i < s.length; i++) {
        // console.log();
        const char = s[i];
        // console.log({ stack });
        // console.log({ i, char });
        switch (char) {
            case '(':
                stack.push(char);
                break;

            case ')':
                // if (stack.length && stack[stack.length - 1] == '(') {
                if (stack.length) {
                    const top = stack.pop();
                    // switch (top) {
                    switch (true) {
                        case top == '(':
                            // updateTop();
                            if (stack.length && !isNaN(stack[stack.length - 1])) {
                                stack[stack.length - 1] += 2;
                            }
                            else {
                                stack.push(2);
                            }
                            break;
                        case !isNaN(top):


                            // if (stack.length) {
                            if (stack.length && stack[stack.length - 1] == '(') {
                                stack.pop();
                                top += 2;
                                if (stack.length && !isNaN(stack[stack.length - 1])) {
                                    // stack[stack.length - 1] += 2;
                                    // stack[stack.length - 1] += top + 2;
                                    stack[stack.length - 1] += top;
                                    // return true;
                                }
                                // if (updateTop()) {
                                // stack[stack.length - 1] += top;
                                // }
                                else {
                                    // stack.push(top + 2);
                                    stack.push(top);
                                }
                                // top + 2;

                                // if (!isNaN(stack[stack.length - 1])) {
                                // }
                                // stack.push(top + stack.pop() + 2);
                            }
                            else {
                                stack.push(top, ')');
                            }
                            break;

                        default:    // ')'
                            break;

                    }



                    // const top = stack.pop();
                    // if (!isNaN(top)) {
                    //     stack.push(top + 2);
                    //     maxLength = Math.max(maxLength, top + 2);
                    // }
                    // else {
                    //     stack.push(top, 2);
                    //     maxLength = Math.max(maxLength, 2);

                    //     // length += 2;
                    // }
                    // if (stack.length == 0) {
                    // prevLength += length;
                    // length = 0;
                    // }
                }
                // else {
                // longest = length > longest ? length : longest;
                // prevLength += length;
                // longest = Math.max(longest, length);
                // length = 0;
                // maxLength = Math.max(maxLength, prevLength);
                // prevLength = 0;
                // }
                break;
        }
    }
    // return maxLength;
    return stack;
    // return Math.max(...stack.filter(e => !isNaN(e)));
};

function run(input) {
    // console.log(input);
    Test.run(longestValidParentheses, input);
}

run("(()");
run(")()())");

run("()(()");

run("()(((()((()(()")
run("())()))())))()")

run(")()((((()");