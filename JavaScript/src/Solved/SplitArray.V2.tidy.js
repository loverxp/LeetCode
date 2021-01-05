// https://leetcode-cn.com/problems/qie-fen-shu-zu/
var Test = require('./Common/Test');

Test.isLogOn = false;

var splitArray = function (nums) {
    return bfs(nums, divide(nums));

    function bfs(nums, { factors, multiples }) {
        const n = nums.length;
        const steps = Array.from({ length: n + 1 }, () => Infinity);
        steps[0] = 0;
        let status = new Set([0]);
        while (status.size) {
            const status2 = new Set();
            for (const i of status) {
                const step = steps[i] + 1;
                for (const [factor, next] of factors[i]) {
                    const multiple = multiples.get(factor);
                    for (let j = next; j < multiple.length; j++) {
                        const index = multiple[j] + 1;
                        if (step < steps[index]) {
                            steps[index] = step;
                            if (index < n) status2.add(index);
                        }
                    }
                }
            }
            status = status2;
        }
        return steps[n];
    }

    function divide(nums) {
        const n = nums.length;
        const max = Math.max(...nums);
        const positions = new Map();
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            if (!positions.has(num)) {
                positions.set(num, []);
            }
            positions.get(num).push(i);
        }

        const factors = Array.from({ length: n }, () => new Map());
        const multiples = new Map();

        const isPrimes = Array(max + 1).fill(true);
        isPrimes[0] = false;
        isPrimes[1] = false;
        for (let i = 2; i <= max; i++) {
            if (isPrimes[i]) {
                if (positions.has(i)) {
                    for (const index of positions.get(i)) {
                        addFactor(i, index);
                    }
                }
                for (let j = i + i; j <= max; j += i) {
                    isPrimes[j] = false;
                    if (positions.has(j)) {
                        for (const index of positions.get(j)) {
                            addFactor(i, index);
                        }
                    }
                }
                if (multiples.has(i)) {
                    multiples.get(i).sort((a, b) => a - b);
                }
            }
        }
        return { factors, multiples };

        function addFactor(factor, i) {
            if (!multiples.has(factor)) {
                multiples.set(factor, []);
            }
            factors[i].set(factor, multiples.get(factor).push(i) - 1);
        }
    }
};

function run(nums) {
    Test.run(splitArray, nums);
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(splitArray, id);
}

function randomTest(n) {
    // const n = Math.trunc(Math.random() * 100);
    const nums = Array.from({ length: n }, () => Math.trunc(Math.random() * n));
    Test.log({ n, nums });
    run(nums);
}

// run([2, 3, 3, 2, 3, 3])
// run([2, 3, 5, 7])



// 2
// run([61, 10, 31, 7, 10, 69, 10, 91, 81, 39, 72, 68, 73, 31, 53, 24, 6, 0, 20, 77, 22, 13, 57, 71, 35, 35, 32, 64, 10, 91, 26, 19, 77, 92, 13, 15, 65, 36, 58, 64, 4, 86, 71, 1, 64, 54, 41, 40, 53, 3, 89, 56, 14, 12, 20, 80, 87, 94, 55, 73, 14, 75, 27, 52, 30, 27, 56, 7, 51, 22, 15, 5, 73, 9, 35, 14, 25, 63, 15, 8, 38, 65, 66, 47, 36, 78, 26, 92, 12, 35, 47, 38, 45, 54, 20])
// 3
// run([19, 17, 29, 31, 11, 17, 14, 17, 32, 8, 26, 11, 37, 18, 39, 38, 17, 28, 28, 14, 38, 19, 4, 23, 27, 39, 31, 1, 25, 24, 16, 26, 3, 1, 9, 40, 7, 38, 25, 4, 9])
// 1
// run([48, 62, 8, 92, 21, 37, 70, 32, 17, 43, 65, 15, 11, 85, 45, 38, 66, 92, 47, 71, 99, 3, 78, 9, 23, 25, 62, 21, 42, 19, 90, 61, 36, 16, 38, 59, 90, 42, 46, 15, 35, 1, 84, 16, 49, 99, 11, 6, 72, 85, 67, 38, 34, 80, 39, 17, 27, 2, 88, 40, 77, 61, 20, 82, 82, 30, 9, 40, 92, 3, 3, 51, 88, 52, 92, 62, 63, 93, 65, 65, 20, 6, 6, 26, 44, 32, 24, 12, 98, 7, 69, 63, 3, 80, 54, 20, 29, 32, 22, 18])

testWithTestcase(111985093);
// randomTest(100);

// [61, 10, 31, 7, 10, 69, 10, 91, 81, 39, 72, 68, 73, 31, 53, 24, 6, 0, 20, 77, 22, 13, 57, 71, 35, 35, 32, 64, 10, 91, 26, 19, 77, 92, 13, 15, 65, 36, 58, 64, 4, 86, 71, 1, 64, 54, 41, 40, 53, 3, 89, 56, 14, 12, 20, 80, 87, 94, 55, 73, 14, 75, 27, 52, 30, 27, 56, 7, 51, 22, 15, 5, 73, 9, 35, 14, 25, 63, 15, 8, 38, 65, 66, 47, 36, 78, 26, 92, 12, 35, 47, 38, 45, 54, 20]
// [19, 17, 29, 31, 11, 17, 14, 17, 32, 8, 26, 11, 37, 18, 39, 38, 17, 28, 28, 14, 38, 19, 4, 23, 27, 39, 31, 1, 25, 24, 16, 26, 3, 1, 9, 40, 7, 38, 25, 4, 9]
// [48, 62, 8, 92, 21, 37, 70, 32, 17, 43, 65, 15, 11, 85, 45, 38, 66, 92, 47, 71, 99, 3, 78, 9, 23, 25, 62, 21, 42, 19, 90, 61, 36, 16, 38, 59, 90, 42, 46, 15, 35, 1, 84, 16, 49, 99, 11, 6, 72, 85, 67, 38, 34, 80, 39, 17, 27, 2, 88, 40, 77, 61, 20, 82, 82, 30, 9, 40, 92, 3, 3, 51, 88, 52, 92, 62, 63, 93, 65, 65, 20, 6, 6, 26, 44, 32, 24, 12, 98, 7, 69, 63, 3, 80, 54, 20, 29, 32, 22, 18]