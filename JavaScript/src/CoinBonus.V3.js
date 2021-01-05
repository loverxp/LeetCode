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
        // if (a > b) {
        //     console.log({ a, b });
        // }
        childrens.get(a).push(b);
    }
    // return;
    // const childrenNums = calcChildrenNums();
    // return childrenNums;
    // let count = 0;
    // for (let [op, member, coins] of operations) {
    //     if (op==3) {

    //     }
    // }
    // return childrens;
    // console.log({n});
    // return operations.reduce((count, [op]) => count + (op == 3 ? 1 : 0), 0);

    const sums = Array(n + 1).fill(0);
    const pendings1 = new Map();
    const pendings2 = new Map();


    const result = [];
    for (let [op, member, coins] of operations) {
        switch (op) {
            case 1: {
                // sums[member] += coins;
                // sums[member] %= mod;
                // updateParents(member, coins);
                // pendings1.push()[];
                pendings1.set(member, coins);
                break;
            }
            case 2: {
                // updateParents(member, dfs(member, coins));
                pendings2.set(member, coins);
                break;
            }
            case 3: {
                // result.push(sums[member]);
                result.push(query(member));
                break;
            }
        }
    }

    return result;

    function calcChildrenNums() {
        const childrenNums = Array(n + 1).fill(0);
        for (let i = 2; i < parents.length; i++) {
            for (let parent = parents[i]; parent; parent = parents[parent]) {
                childrenNums[parent]++;
            }
        }
        return childrenNums;
    }

    function query(member) {
        if (pendings1.size && pendings2.size) {

        }
        else {
            return sums[member];
        }
    }

    function count() {
        const stack = [[1, 0, childrens.get(1).values()]];
        while (true) {
            const [member, sum, children] = top = stack[stack.length - 1];
            

        }

    }

    function dfs(member, coins) {
        const stack = [[member, coins, 0]];     // [member, sum, childIndex]
        while (true) {
            const [member, sum, childIndex] = top = stack[stack.length - 1];
            const children = childrens.get(member);
            if (children && childIndex < children.length) {
                stack.push([children[childIndex], coins, 0]);
                top[2]++;
            }
            else {
                sums[member] += sum;
                sums[member] %= mod;
                stack.pop();
                if (stack.length) {
                    const top = stack[stack.length - 1];
                    top[1] += sum;
                }
                else {
                    return sum;
                }
            }
        }
    }

    function updateParents(member, coins) {
        for (let parent = parents[member]; parent; parent = parents[parent]) {
            sums[parent] += coins;
            sums[parent] %= mod;
        }
    }
};

function test(n, leadership, operations) {
    Test.logArgs = false;
    Test.test(bonus, n, leadership, operations);
}

function testWithTestcase(id) {
    Test.logArgs = false;
    // Test.logResult = false;
    Test.testWithTestcase(bonus, id);
}

// test(6, [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]])
// test(6, [[1, 2], [1, 6], [6, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]])

// https://leetcode-cn.com/submissions/detail/91466850/testcase/
// testWithTestcase(91466850);
// testWithTestcase("91466850.2");
// https://leetcode-cn.com/submissions/detail/91771719/testcase/
testWithTestcase(91771719);

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