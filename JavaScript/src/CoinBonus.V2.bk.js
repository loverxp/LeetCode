// https://leetcode-cn.com/problems/coin-bonus/
var Test = require('./Common/Test');

var bonus = function (n, leadership, operations) {
    const mod = 1e9 + 7;
    const parents = Array(n + 1);
    const childrens = new Map();
    for (const [a, b] of leadership) {
        parents[b] = a;
        if (!childrens.has(a)) {
            childrens.set(a, []);
        }
        childrens.get(a).push(b);
    }
    const sums = Array(n + 1).fill(0);
    const result = [];
    for (const operation of operations) {
        let member = operation[1];
        const coins = operation[2];
        switch (operation[0]) {
            case 1: {
                sums[member] += coins;
                sums[member] %= mod;
                updateParents(member, coins);
                break;
            }
            case 2: {
                updateParents(member, dfs(member, coins));
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
        let sum = 0;
        // const stack = [[member, {}]];
        // const stack = [{ member, used: false, sum }];
        // const stack = [[member, false, 0]];
        const stack = [[member, 0]];
        while (stack.length) {
            // const [member, used] = top = stack[stack.length - 1];
            // const { member, used, sum } = top = stack[stack.length - 1];
            const [member, sum] = top = stack[stack.length - 1];
            const children = childrens.get(member);
            // if (!used && children) {
            if (!used && children) {
                for (const child of children) {
                    // stack.push([child, false]);
                    stack.push({ child, false]);
                }
                // top[1] = true;
                top.used = true;
            }
            else {
                sum += coins;
                // sums[member] += coins;
                sums[member] += coins;
                sums[member] %= mod;
                if (member != stack[0]) {
                    // sums[parents[member]] += coins;
                }
                stack.pop();
            }
        }
        return sum;
        // return stack[0].sum;
    }

    function updateParents(member, coins) {
        for (let parent = parents[member]; parent; parent = parents[parent]) {
            sums[parent] += coins;
            sums[parent] %= mod;
        }
    }
};

function test(n, leadership, operations) {
    Test.test(bonus, n, leadership, operations);
}

function testWithTestcase(id) {
    Test.testWithTestcase(bonus, id);
}

test(6, [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]])
test(6, [[1, 2], [1, 6], [6, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]])

// https://leetcode-cn.com/submissions/detail/91466850/testcase/
// testWithTestcase(91466850);
// testWithTestcase("91466850.2");
// https://leetcode-cn.com/submissions/detail/91467739/testcase/

// https://leetcode-cn.com/submissions/detail/91467739/testcase/
// Test.compareArray(...Test.wrongOutput(91467739))

/*
const compareArray = function (arr1, arr2) {
    // console.log(arr1);
    // console.log(...arguments);
    for (let i = 0; i < arr1.length && i < arr2.length; i++) {
        // if (arr1[i] != arr2[i]) {
            console.log([i, arr1[i], arr2[i]]);
        // }
    }
}

compareArray(...Test.wrongOutput(91467739));
*/