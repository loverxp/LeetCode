// https://leetcode-cn.com/problems/expression-add-operators/
var Test = require('./Common/Test');

var addOperators = function (num, target) {
    const operators = ['+', '-', '*', ''];

    const result = [];
    backTracing([], 0);
    return result;

    function backTracing(expr, index) {
        // expr.push(num[index++]);
        // index++;
        // if (index == num.length) {
        if (index == num.length - 1) {
            expr.push(num[index]);
            // const expr = expr.join('');
            expr = expr.join('');
            if (eval(expr) == target) {
                result.push(expr);
            }
        }
        else {
            if (expr.length > 0) {
                // expr = expr.slice();
                const operator = expr[expr.length - 1];
                // const operator = expr.pop();

                // expr.push(num[index]);
                switch (operator) {
                    case '+':
                    case '-':
                        const prevValue = eval(expr.join(''));
                        expr = [prevValue, operator];
                        // backTracing([prevValue, operator], index);
                        break;
                    case '*':
                        // backTracing([prevValue, operator], index);
                        break;
                    case '':
                        expr.pop();
                        expr[expr.length - 1] += num[index];
                        break;
                }
            }
            else {
                expr.push(num[index]);
            }


            for (const operator of operators) {
                if (!(expr[expr.length - 1] == '0' && operator == '')) {
                    // switch (operator) {
                    //     case '+':
                    //     case '-':
                    //         backTracing([prevValue, operator], index);
                    //         break;
                    //     case '*':
                    //         // backTracing([prevValue, operator], index);
                    //         break;
                    //     case '':
                    //         break;
                    // }
                    // expr.push(operator);
                    // backTracing([prevValue, operator], index);
                    // backTracing(expr, index + 1);
                    // expr.pop();
                }
            }
        }
        // expr.pop();
    }
};

function test(num, target) {
    Test.test(addOperators, num, target);
}

// test("123", 6);
// test("123", 15);
// test("232", 8)
// test("105", 5)
// test("00", 0)
// test("3456237490", 9191)

// "123"
// 6
// "123"
// 15
