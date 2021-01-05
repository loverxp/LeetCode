// https://leetcode-cn.com/problems/ipo/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');

var findMaximizedCapital = function (k, W, Profits, Capital) {
    const n = Profits.length;
    const heap = new Heap((a, b) => Profits[a] > Profits[b]);
    const indexes = [...Capital.keys()].sort((a, b) => Capital[a] - Capital[b]);

    for (let i = 0, j = 0; i < k; i++) {
        for (let index = indexes[j]; j < n && Capital[index] <= W; index = indexes[++j]) {
            heap.push(index);
        }
        const index = heap.pop();
        if (index != undefined) {
            W += Profits[index];
        }
        else{
            break;
        }
    }
    return W;
};

function run(k, W, Profits, Capital) {
    Test.run(findMaximizedCapital, k, W, Profits, Capital);
}


run(2, 0, [1, 2, 3], [0, 1, 1]);
run(2, 0, [1, 2, 3, 1, 5], [0, 4, 3, 1, 3]);
run(3, 0, [1, 2, 3], [0, 1, 2])
run(1, 0, [1, 2, 3], [1, 1, 2])