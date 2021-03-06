// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/
// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/solution/golang-er-fen-cha-zhao-by-resara-3/
var Test = require('./Common/Test');

var smallestDistancePair = function (nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    // console.log({ nums });
    const sections = [...Array(n - 1).keys()];
    let inc = true;
    let count = 0;

    let low = 0, high = nums[n - 1] - nums[0];
    while (low < high) {
        let mid = low + high >> 1;
        if (inc) {
            for (let i = 0; i < n - 1; i++) {
                let j = sections[i];
                while (++j < n && nums[j] - nums[i] <= mid) {
                    count++;
                    sections[i]++;
                }
            }
        }
        else {
            for (let i = 0; i < n - 1; i++) {
                let j = sections[i];
                while (nums[j--] - nums[i] > mid) {
                    count--;
                    sections[i]--;
                }
            }
        }
        if (count >= k) {
            high = mid;
            inc = false;
        }
        else {
            low = mid + 1;
            inc = true;
        }
    }
    return low;
};

function run(nums, k) {
    Test.run(smallestDistancePair, nums, k);
}

function testWithTestcase(id) {
    Test.testWithTestcase(smallestDistancePair, id);
}

function testCalcDists(id) {
    Test.testWithTestcase((nums, k) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        let min = Infinity;
        let max = - Infinity;
        const dists = [];
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                const dist = nums[j] - nums[i];
                min = Math.min(min, dist);
                max = Math.max(max, dist);
                dists.push(dist);
            }
        }
        // return { max, min };
        // return dists;
    }, id);
}



// run([1, 3, 1], 1);
// run([1, 3, 1], 2);
// run([1, 3, 1], 3);
// run([1, 1, 3, 1], 3);
// run([1, 1, 3, 1], 6);
// run([1, 1, 3, 1], 7);
// run([1, 3, 1], 4);
// run([62, 100, 4], 2);

// testWithTestcase(103744976);        //1
// testWithTestcase(103744976.2);        //1
// testWithTestcase(103744976.3);        //1
testWithTestcase(103873538);        //292051

// testCalcDists(103744976);
// testCalcDists(103873538);

// [1,3,1]
// 1
// [1,3,1]
// 2
// [1,3,1]
// 3
// [1, 1, 3, 1]
// 3
// [1, 1, 3, 1]
// 6
// [62, 100, 4]
// 2
// [1, 1, 3, 1]
// 7