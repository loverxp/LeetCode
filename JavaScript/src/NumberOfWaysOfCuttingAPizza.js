// https://leetcode-cn.com/problems/number-of-ways-of-cutting-a-pizza/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var ways = function (pizza, k) {
    const [m, n] = [pizza.length, pizza[0].length];
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array.from({ length: k }, () => 0)));
    dp[0][0][0] = 1;

    for (let i = 0; i < m; i++) {
        
        for (let j = 0; j < n; j++) {
            let hasApple = false;
            for (let x = i; x < m; x++) {
                if (pizza[x][j] == 'A') {
                    hasApple = true;
                    break;
                }
            }
            
        }
    }

    return dp;
};

function run(pizza, k) {
    Matrix.logMatrixInString(pizza);
    Test.run(ways, pizza, k);
}

run(["A..", "AAA", "..."], 3);
run(["A..", "AA.", "..."], 3);
run(["A..", "A..", "..."], 1);