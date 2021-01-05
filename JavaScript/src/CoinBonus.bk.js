// https://leetcode-cn.com/problems/coin-bonus/
var Test = require('./Common/Test');

var bonus = function (n, leadership, operations) {
    const mod = 1e9 + 7;

    const parents = Array(n + 1);
    const childrens = new Map();
    for (const [a, b] of leadership) {
        parents[b] = a;
        if (!childrens.has(a)) {
            // tree.set(a, new Set());
            childrens.set(a, []);
        }
        // tree.get(a).add(b);
        childrens.get(a).push(b);
    }
    // return tree;
    // return parents;

    const sums = Array(n + 1).fill(0);
    const result = [];
    for (const operation of operations) {
        console.log();
        const member = operation[1];
        const coins = operation[2];
        switch (operation[0]) {
            case 1: {
                sums[member] += coins;
                break;
            }
            case 2: {
                const queue = [member];
                while (queue.length) {
                    const member = queue.shift();
                    sums[member] += coins;
                    queue.push(...tree.get(member));
                }

                // dfs(member, coins);
                break;
            }
            case 3: {
                result.push(sums[member]);
                break;
            }
        }
    }

    return result;

    function dfs(member, coins) {
        console.log({ member, coins });
        const children = childrens.get(member);
        let sum = coins;
        if (children) {
            sum = children.reduce((sum, child) => sum + dfs(child, coins), coins);
            // sum = children.reduce((sum, child) => sum + dfs(child, coins), 0);
        }
        sums[member] += sum;
        console.log(sums[member]);
        return sum;
    }
};

function test(n, leadership, operations) {
    Test.test(bonus, n, leadership, operations);
}

test(6, [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]])