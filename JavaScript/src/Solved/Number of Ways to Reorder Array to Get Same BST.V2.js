// https://leetcode-cn.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
var Test = require('./Common/Test');
const { Matrix } = require('./Common/Matrix');

var numOfWays = function (nums) {
    const mod = 1000000007;
    return permutations(makeTree(nums));

    function permutations(root) {
        const c = comb(root.size);
        return dfs(root) - 1;

        function dfs(node) {
            const [l, r] = [node.l, node.r];
            const ls = l ? l.size : 0;
            const rs = r ? r.size : 0;
            const lp = l ? dfs(l) : 1;
            const rp = r ? dfs(r) : 1;
            // const p = ((lp * rp) * mxn[ls][rs]) % mod;
            // console.log({ ls, rs });
            // const p = lp * rp * mxn[ls][rs] % mod;
            // const p = lp * rp % mod * c[ls][rs] % mod;
            // const p = lp * rp * mxn[ls + rs][rs] % mod;
            // const p = lp * rp % mod * c[ls + rs][rs] % mod;
            // const p = c[ls + rs][ls] % mod * lp % mod * rp % mod;
            // const p = c[ls + rs][ls] * lp % mod * rp % mod;
            const p = c[ls + rs][rs] * rp % mod * lp % mod;
            // const p = c[ls + rs][rs] * rp * lp % mod;
            // const p = lp % mod * rp % mod * mxn[ls][rs] % mod;
            console.log({ lp, rp, c: c[ls + rs][rs], p });
            // console.log({ p });
            return p;
        }
    }

    function makeTree(nums) {
        const root = { val: nums[0], size: 1 }
        for (let i = 1; i < nums.length; i++) {
            insert(root, nums[i]);
        }
        return root;

        function insert(node, num) {
            node.size++;
            switch (true) {
                case num < node.val:
                    if (node.l) {
                        insert(node.l, num);
                    }
                    else {
                        node.l = { val: num, size: 1 };
                    }
                    break;

                case num > node.val:
                    if (node.r) {
                        insert(node.r, num);
                    }
                    else {
                        node.r = { val: num, size: 1 };
                    }
                    break;
            }
        }
    }

    function comb(n) {
        const c = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
        c[0][0] = 1;
        for (let i = 1; i < n; i++) {
            c[i][0] = 1;
            for (let j = 1; j < n; j++) {
                c[i][j] = (c[i - 1][j - 1] + c[i - 1][j]) % mod;
            }
        }
        return c;
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

// 182440977
// 683987780,86025018,634233022
run([10, 23, 12, 18, 4, 29, 2, 8, 41, 31, 25, 21, 14, 35, 26, 5, 19, 43, 22, 37, 9, 20, 44, 28, 1, 39, 30, 38, 36, 6, 13, 16, 27, 17, 34, 7, 15, 3, 11, 24, 42, 33, 40, 32]);
// run([10, 23, 12, 18, 4, 29, 2, 8, 41, 31, 25, 21, 14, 35, 26, 5, 19, 43, 22, 37, 9, 20, 44, 28, 1, 39, 30, 38, 36, 6, 13, 16, 27, 17, 34, 7, 15, 3, 11, 24, 42, 33, 40, 32])

// const p = c[ls + rs][ls] % mod * lp % mod * rp % mod;
// { lp: 448, rp: 711346030 } 563921995
// { p: 86025019 }

// const p = c[ls + rs][ls] * lp % mod * rp % mod;
// { lp: 448, rp: 711346034 } 563921995
// { p: 634233023 }
// { lp: 448, rp: 711346034, c: 563921995, p: 634233023 }

// const p = c[ls + rs][ls] * rp % mod * lp % mod;
// { lp: 448, rp: 711346038, c: 563921995, p: 182432914 }

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