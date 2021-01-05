// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/
// https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/solution/er-fen-fa-qian-zhui-he-by-wangdh15/
var Test = require('./Common/Test');

var smallestDistancePair = function (nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    console.log({ nums });

    const uniqs = nums.slice(0, 1);
    const counter = [1];
    let index = 0;
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (uniqs[index] == num) {
            counter[index]++;
        }
        else {
            index++;
            uniqs[index] = num;
            counter[index] = 1;
        }
    }

    // return [uniqs, counter];
    const prefix = counter.slice(0, 1);

    for (let i = 1; i < n; i++) {
        prefix[i] += prefix[i - 1];
    }

    console.log({ index });

    // const max = uniqs[index - 1];
    // let l = 0, r = max;
    // let l = 0, r = index;
    let l = 0, r = index - 1;
    while (l < r) {
        let count = 0;
        let mid = l + r >> 1;
        for (let i = 0; i < index; i++) {
            // const num = uniqs[i];
            const numCount = counter[i];
            count += (numCount - 1) * numCount >> 1;
            // count += (prefix[Math.min(i + mid, index)] - prefix[i]) * numCount;
            count += (prefix[Math.min(i + mid, index - 1)] - prefix[i]) * numCount;
        }
        if (count >= k) {
            r = mid;
        }
        else {
            l = mid + 1;
        }
    }
    return l;
};

function run(nums, k) {
    Test.run(smallestDistancePair, nums, k);
}

function testWithTestcase(id) {
    Test.testWithTestcase(smallestDistancePair, id);
}

// run([1, 3, 1], 1);
// run([1, 3, 1], 2);
// run([1, 3, 1], 3);
// run([1, 1, 3, 1], 3);
// run([1, 1, 3, 1], 6);
// run([1, 1, 3, 1], 7);
// run([1, 3, 1], 4);
run([62, 100, 4], 2);

// testWithTestcase(103744976);        //1
// testWithTestcase(103744976.2);        //1
// testWithTestcase(103744976.3);        //1
// testWithTestcase(103873538);