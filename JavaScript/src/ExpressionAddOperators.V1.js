// https://leetcode-cn.com/problems/expression-add-operators/
var Test = require('./Common/Test');

var addOperators = function (num, target) {
    const operators = ['+', '-', '*', ''];

    const result = [];
    backTracing([], 0);
    return result;

    function backTracing(array, index) {
        array.push(num[index++]);
        if (index == num.length) {
            const expr = array.join('');
            if (eval(expr) == target) {
                result.push(expr);
            }
        }
        else {
            for (const operator of operators) {
                if (!(array[array.length - 1] == '0' && operator == '')) {
                    array.push(operator);
                    backTracing(array, index);
                    array.pop();
                }
            }
        }
        array.pop();
    }
};

function test(num, target) {
    Test.test(addOperators, num, target);
}

test("123", 6);
test("123", 15);
test("232", 8)
test("105", 5)
test("00", 0)
test("3456237490", 9191)

// "123"
// 6
// "123"
// 15