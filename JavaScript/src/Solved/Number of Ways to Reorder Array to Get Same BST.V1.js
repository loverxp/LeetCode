// https://leetcode-cn.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
var Test = require('./Common/Test');
const { Matrix } = require('./Common/Matrix');

var numOfWays = function (nums) {
    // const mod = 1e9 + 7;
    // const mod = 10 ** 9 + 7;
    const mod = 1000000007;
    return permutations(makeTree(nums));

    function permutations(root) {
        // const mxn = calcMxN(root.l ? root.l.size : 0, root.r ? root.r.size : 0);
        const mxn = calcMxN(root.size);
        // return mxn[11][3];
        // return mxn;
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
            // const p = lp * rp % mod * mxn[ls][rs] % mod;
            // const p = lp * rp * mxn[ls + rs][rs] % mod;
            const p = lp * rp % mod * mxn[ls + rs][rs] % mod;
            // const p = lp % mod * rp % mod * mxn[ls][rs] % mod;
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

    // function calcMxN(n) {
    //     const mat = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    //     mat[0][0] = 1;
    //     for (let j = 0; j <= n; j++) {
    //         mat[0][j] = 1;
    //     }
    //     for (let i = 1; i <= n; i++) {
    //         mat[i][0] = 1;
    //         for (let j = 1; j <= n; j++) {
    //             mat[i][j] = (mat[i][j - 1] + mat[i - 1][j]) % mod;
    //             // mat[i][j] %= mod;
    //         }
    //     }
    //     return mat;
    // }

    function calcMxN(n) {
        const c = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
        c[0][0] = 1;
        for (let j = 0; j < n; j++) {
            // c[0][j] = 1;
        }
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