var Test = require('../Common/Test');
var parseBoolExpr = function (expression) {
    if (expression.length == 1) return expression == 't';

    const opStack = [];
    const parensStack = [];
    let curOp, value, pass = false;

    for (let index = 0; index < expression.length; index++) {
        const token = expression[index];
        if (!pass) {
            if (/^[!&|]/.test(token)) {
                curOp = token;
                opStack.push(token);
                switch (curOp) {
                    case '|':
                        value = false;
                        break;
                    case '&':
                        value = true;
                        break;
                }
                index++;
            }
            else {
                let curValue = value;
                if (token == ")") {
                    opStack.pop();
                    curOp = opStack[opStack.length - 1];
                }
                else if (/^[tf]$/.test(token)) {
                    curValue = token == 't';
                }
                else {
                    continue;
                }
                switch (curOp) {
                    case '|':
                        if (curValue) {
                            value = true;
                            pass = true;
                        }
                        break;
                    case '&':
                        if (!curValue) {
                            value = false;
                            pass = true;
                        }
                        break;
                    case '!':
                        value = !curValue;
                        break;
                }
            }
        }
        else {
            switch (token) {
                case '(':
                    parensStack.push(token);
                    break;
                case ')':
                    if (parensStack.length > 0) {
                        parensStack.pop();
                    }
                    else {
                        pass = false;
                        index--;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return value;
};

function test(expression) {
    Test.test(parseBoolExpr, expression);
}

// test("!(f)");
// test("|(f,t)");
// test("&(t,f)");
// test("|(&(t,f,t),!(t))");
test("|(&(t,f,t),!(f))");
