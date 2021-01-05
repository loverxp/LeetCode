// https://leetcode-cn.com/problems/number-of-atoms/
var Test = require('../Common/Test');

var countOfAtoms = function (formula) {
    const atoms = {};
    const tokens = formula.match(/[A-Z][a-z]*|\d+|\(|\)/g);
    let tokenIndex = 0;
    let nextToken = tokens[tokenIndex];
    calcAtoms(parseFormula(), 1);
    return Object
        .entries(atoms)
        .sort(([a,], [b,]) => a > b ? 1 : -1)
        .map(([atom, num]) => atom + (num == 1 ? '' : num))
        .join('');

    function match(token) {
        switch (token) {
            case undefined:
            case nextToken:
                tokenIndex++;
                nextToken = tokenIndex < tokens.length ? tokens[tokenIndex] : '$';
                return true;
            default:
                return false;
        }
    }

    function parseNum() {
        let num = 1;
        if (!isNaN(nextToken)) {
            num = Number(nextToken);
            match();
        }
        return num;
    }

    function parseFormula() {
        const formulas = [];
        while (nextToken != ')' && nextToken != '$') {
            switch (true) {
                case /^[A-Z]/.test(nextToken): {
                    const atom = nextToken;
                    match();
                    formulas.push({ atom, num: parseNum() })
                    break;
                }

                case nextToken == '(': {
                    match();
                    const formula = parseFormula();
                    match();    // ')';
                    formulas.push({ formula, num: parseNum() });
                    break;
                }

                default:
                    break;
            }
        }
        return formulas;
    }

    function calcAtoms(formulas, num) {
        formulas.forEach(formula => {
            if (formula.atom) {
                const atom = formula.atom;
                if (atoms[atom] == undefined) {
                    atoms[atom] = 0;
                }
                atoms[atom] += num * formula.num;
            }
            else {
                calcAtoms(formula.formula, num * formula.num);
            }
        });
    }
};

function test(input) {
    Test.test(countOfAtoms, input);
}

test("Be32");
test("H2O");
test("Mg(OH)2");
test("K4(ON(SO3)2)2");
test("K4(ON(SO3)22)2");
