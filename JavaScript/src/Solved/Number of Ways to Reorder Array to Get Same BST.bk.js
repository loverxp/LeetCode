// https://leetcode-cn.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
var Test = require('../Common/Test');

var numOfWays = function (nums) {

    return permutations(makeTree(nums))[1] - 1;
    // const result = permutations(makeTree(nums));
    // console.log({ result });
    // return result;

    function permutations(root) {
        const mod = 1e9 + 7;
        return dfs(root);
        // const result = dfs(root) - 1;
        // console.log({ result });
        // return result;

        function dfs(node) {
            if (!node) return [0, 1];
            const [lc, lp] = dfs(node.l);
            const [rc, rp] = dfs(node.r);

            console.log({ lc, rc, lp, rp });
            // let v = 0;
            // if (lc == 0 || rc == 0) {
            //     v = 1;
            // }
            // else {
            //     // for (let i = 1; i <= lc + 1; i++) {
            //     // }
            //     // for (let i = lc + 1; i >= 1; i--) {

            //     // }
            //     // for (let i = 0; i < rc; i++) {

            //     // }
            //     v = mxn(lc + 1, rc);
            // }
            // if (lc + rc == 0) {
            //     v = 1;
            // }
            // else {
            //     if (lc == 0) v = rp;
            //     if (rc == 0) v = lp;

            // }
            // return [lc + rc + 1, lp * rp * v];

            // return [lc + rc + 1, (lp * rp * mxn(lc, rc)) % mod];
            const result = [lc + rc + 1, (lp * rp * mxn(lc, rc)) % mod];
            console.log({ result });
            return result;
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
        // const arr = Array(m + 1).fill(0);
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
        console.log(arr);
        return arr.reduce((sum, n, i) => sum + n * i, 0);
    }

};

function run(nums) {
    Test.run(numOfWays, nums);
}


// run([2, 1, 3])
// run([3, 4, 5, 1, 2])
// run([1, 2, 3])
// run([3, 1, 2, 5, 4, 6])
run([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18])


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