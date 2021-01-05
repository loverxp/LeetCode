var Test = require('../Common/Test');

var evaluate = function (expression) {

    class Env {
        constructor(top) {
            this.top = top;
            this.env = new Map();
        }

        ext(key, value) {
            this.env.set(key, value);
        }

        lookup(key) {
            const v = this.env.get(key);
            return v != undefined ? v : this.top ? this.top.lookup(key) : null;
        }
    }

    function parse() {
        let exp = expression.replace(/\(/g, "[")
            .replace(/\)/g, "],")
            .replace(/\w+/g, "'$&',")
            .replace(/,$/, '')
            .replace(/'(\d+)'/g, "$1");

        return eval(exp);
    }

    function evalExpr(env, expr) {
        switch (typeof expr) {
            case 'number': return expr;
            case 'string': return evalExpr(env, env.lookup(expr));
            default: {       // array
                const op = expr[0];
                switch (op) {
                    case 'add': return evalAdd(env, expr[1], expr[2]);
                    case 'mult': return evalMult(env, expr[1], expr[2]);
                    case 'let': return evalLet(env, expr);
                }
            }
        }
    }

    function evalLet(topEnv, letExpr) {
        const env = new Env(topEnv);
        for (let index = 1; index < letExpr.length - 1; index += 2) {
            env.ext(letExpr[index], evalExpr(env, letExpr[index + 1]));
        }
        return evalExpr(env, letExpr[letExpr.length - 1]);
    }

    function evalAdd(env, expr1, expr2) {
        return evalExpr(env, expr1) + evalExpr(env, expr2);
    }

    function evalMult(env, expr1, expr2) {
        return evalExpr(env, expr1) * evalExpr(env, expr2);
    }

    return evalExpr(null, parse());
};

function test(expression) {
    Test.test(evaluate, expression);
}

// test("(add 1 2)");
// test("(mult 3 (add 2 3))");
// test("(let x 2 (mult x 5))");
// test("(let x 2 (mult x (let x 3 y 4 (add x y))))");
// test("(let x 3 x 2 x)");
// test("(let x 1 y 2 x (add x y) (add x y))");
// test("(let x 2 (add (let x 3 (let x 4 x)) x))");
// test("(let a1 3 b2 (add a1 1) b2)");
// test("(let x0 -4 x1 1 x2 -1 x3 -1 x4 3 x5 1 x6 -4 x7 -1 x8 -5 x9 3 (let x0 -5 x2 -2 x4 -4 x6 -4 x8 0 (let x0 3 x3 -1 x6 4 x9 -2 (let x0 0 x4 -3 x8 -2 (add (add x4 (let x0 -5 x7 1 (let x0 -2 x8 -2 (mult x2 x7)))) x0)))))")
