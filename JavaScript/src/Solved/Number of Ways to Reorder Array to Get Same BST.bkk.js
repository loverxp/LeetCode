// https://leetcode-cn.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
var Test = require('./Common/Test');

var numOfWays = function (nums) {
    const mod = 1e9 + 7;
    return permutations(makeTree(nums))[1] - 1;
    // return (permutations(makeTree(nums))[1] - 1 + mod) % mod;

    function permutations(root) {
        return dfs(root);

        function dfs(node) {
            if (!node) return [0, 1];
            const [lc, lp] = dfs(node.l);
            const [rc, rp] = dfs(node.r);
            const p = (((lp * rp) % mod) * mxn(lc, rc)) % mod;
            // const p = ((lp * rp) * mxn(lc, rc)) % mod;
            return [lc + rc + 1, p];
            // return [lc + rc + 1, (lp * rp * mxn(lc, rc)) % mod];
            // return [lc + rc + 1, (lp * rp * mxn(lc, rc))];
        }
    }

    function makeTree(nums) {
        const root = { val: nums[0] }
        for (let i = 1; i < nums.length; i++) {
            insert(root, nums[i]);
        }
        return root;

        function insert(node, num) {
            switch (true) {
                case num < node.val:
                    if (node.l) {
                        insert(node.l, num);
                    }
                    else {
                        node.l = { val: num };
                    }
                    break;

                case num > node.val:
                    if (node.r) {
                        insert(node.r, num);
                    }
                    else {
                        node.r = { val: num };
                    }
                    break;
            }
        }
    }

    function mxn(m, n) {
        if (m == 0 || n == 0) return 1;
        m++;
        const arr = Array(m + 1).fill(0);
        arr[m] = 1;
        for (let i = 0; i < n - 1; i++) {
            let sum = 1;
            for (let j = m - 1; j > 0; j--) {
                const sum2 = sum;
                sum += arr[j];
                arr[j] += sum2;
            }
        }
        // return arr.reduce((sum, n, i) => sum + n * i, 0);
        return arr.reduce((sum, n, i) => sum + n * i, 0) % mod;
    }
};

function run(nums) {
    Test.run(numOfWays, nums);
}


// run([2, 1, 3])
// run([3, 4, 5, 1, 2])
// run([1, 2, 3])
// run([3, 1, 2, 5, 4, 6])
// run([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18])
run([10, 23, 12, 18, 4, 29, 2, 8, 41, 31, 25, 21, 14, 35, 26, 5, 19, 43, 22, 37, 9, 20, 44, 28, 1, 39, 30, 38, 36, 6, 13, 16, 27, 17, 34, 7, 15, 3, 11, 24, 42, 33, 40, 32]);


function tt(m, n) {
    // const arr = Array(m).fill(0);
    // arr[m - 1] = 1;
    const arr = Array(m + 1).fill(0);
    arr[m] = 1;
    console.log(arr);

    for (let i = 0; i < n; i++) {
        // console.log({ i });
        let sum = 1;
        // for (let j = m - 2; j >= 0; j--) {
        for (let j = m - 1; j > 0; j--) {
            // console.log({ sum });
            const sum2 = sum;
            sum += arr[j];
            arr[j] += sum2;
        }
        console.log(arr);
    }
    const result = arr.reduce((sum, n, i) => sum + n * i, 0);
    console.log({ result });
}

// tt(3, 5);
// tt(4, 5);
// tt(5, 5);

// tt(4, 10);