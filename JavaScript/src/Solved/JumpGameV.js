// https://leetcode-cn.com/problems/jump-game-v/
var Test = require('../Common/Test');

var maxJumps = function (heights, d) {
    const counter = Array(heights.length).fill(1);
    let indexes = new Set(counter.keys());

    while (indexes.size) {
        const indexes2 = new Set();

        for (const i of indexes) {
            const height = heights[i];
            const count = counter[i] + 1;
            let left = i, right = i;
            while (left > Math.max(0, i - d) && heights[--left] < height) {
                counter[left] = Math.max(count, counter[left]);
                indexes2.add(left);
            }
            while (right < Math.min(heights.length - 1, i + d) && heights[++right] < height) {
                counter[right] = Math.max(count, counter[right]);
                indexes2.add(right);
            }
        }
        indexes = indexes2;
    }

    return Math.max(...counter);
};

function test(arr, d) {
    Test.test(maxJumps, arr, d);
}

// test([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2);
// test([3, 3, 3, 3, 3], 3);
// test([7, 6, 5, 4, 3, 2, 1], 1);
// test([7, 1, 7, 1, 7, 1], 2);
// test([66], 1);
test([37, 37, 58, 28, 98, 26, 7, 76, 51, 6, 89, 73, 6, 93, 13, 90, 14, 58, 14, 16, 67, 37, 72, 7, 49, 77, 78, 67, 35, 85, 39, 53, 81, 22, 53, 22, 35, 52, 95, 43, 59, 45, 79, 83, 92, 96, 97, 25, 30, 26, 87, 11, 46, 6, 13, 93, 21, 27, 65, 57, 88, 68, 99, 77, 3, 97, 45, 29, 54, 36, 71, 42, 11, 90, 13, 53, 58, 34, 94, 39, 29, 53, 21, 4, 17, 3, 54, 64, 17, 12, 47, 80, 49, 76, 71, 23, 36, 94, 61, 87, 48, 59, 62, 70, 29, 52, 45, 47, 34, 27, 54, 55, 27, 54, 99, 30, 79, 21, 28, 89, 5, 40, 35, 20, 27, 2, 50, 69, 50, 99, 5, 98, 88, 91, 33, 48, 27, 45, 78, 97, 2, 67, 30, 70, 4, 93, 30, 81, 29, 7, 69, 86, 65, 87, 52, 7, 77, 49, 26, 18, 26, 2, 64, 65, 43, 84, 51, 65, 20, 23, 27, 29, 39, 4, 79, 85, 26, 10, 41, 20, 79, 75, 100, 35, 72, 76, 55, 3, 52, 84, 23, 38, 8, 18, 93, 69, 45, 42, 4, 68, 30, 11, 13, 53, 70, 25, 63, 38, 37, 33, 90, 15, 28, 98, 70, 55, 2, 30, 99, 29, 46, 65, 50, 49, 45, 51, 97, 59, 15, 54, 68, 99, 38, 64, 80, 40, 6, 65, 8, 6, 21, 18, 5, 5, 82, 80, 14, 45, 68, 54, 28, 17, 87, 58, 96, 1, 32, 81, 84, 56, 80, 21, 33, 82, 79, 71, 63, 55, 41, 9, 59, 26, 82, 44, 81, 29, 44, 44, 46, 17, 17, 35, 32, 13, 80, 10, 41, 55, 1, 22, 29, 93, 94, 84, 10, 33, 34, 63, 100, 54, 32, 67, 66, 48, 11, 38, 14, 77, 80, 84, 63, 37, 62, 8, 89, 49, 18, 56, 59, 29, 10, 50, 72, 55, 76, 68, 3, 90, 7, 6, 69, 46, 71, 78, 54, 65, 86, 19, 26, 88, 82, 23, 43, 91, 1, 92, 40, 10, 21, 40, 25, 99, 90, 27, 3, 69, 85, 43, 1, 90, 9, 68, 9, 49, 75, 63, 24, 27, 11, 12, 21, 28, 75, 77, 64, 88, 8, 55, 38, 1, 63, 29, 69, 79, 8, 52, 60, 57, 83, 68, 3, 76, 45, 65, 77, 60, 8, 4, 12, 4, 30, 35, 31, 100, 62, 74, 49, 59, 8, 55, 92, 79, 45, 87, 18, 39, 2, 30, 72, 4, 75, 13, 57, 85, 94, 85, 87, 74, 73, 21, 25, 67, 51, 6, 92, 90, 99, 96, 56, 50, 78, 92, 41, 39, 49, 42, 96, 27, 32, 86, 68, 76, 30, 14, 15, 79, 45, 46, 79, 77, 93, 61, 29, 2, 67, 20, 30, 86, 29, 89, 68, 77, 82, 87, 28, 65, 70, 69, 54, 50, 48, 62, 69, 98, 8, 80, 90, 97, 41, 10, 65, 32, 23, 21, 1, 93, 72, 82, 64, 84, 18, 57, 11, 21, 75, 14, 45, 62, 31, 18, 80, 60, 29, 67, 93, 9, 28, 1, 17, 55, 21, 37, 67, 82, 54, 80, 44, 83, 15, 59, 21, 57, 18, 24, 26, 88, 1, 86, 32, 47, 24, 98, 64, 19, 100, 50, 16, 18, 18, 67, 86, 29, 87, 2, 56, 72, 11, 28, 22, 36, 87, 25, 7, 93, 23, 80, 74, 14, 64, 46, 5, 32, 82, 47, 8, 77, 43, 89, 34, 45, 6, 93, 26, 57, 71, 36, 90, 60, 31, 29, 65, 91, 78, 97, 36, 98, 31, 32, 57, 97, 93, 87, 57, 40, 36, 35, 49, 85, 90, 94, 2, 36, 5, 56, 53, 70, 32, 81, 99, 62, 3, 66, 72, 92, 48, 47, 29, 2, 41, 27, 49, 40, 97, 8, 10, 84, 32, 18, 7, 38, 19, 40, 55, 97, 72, 9, 11, 85, 70, 60, 10, 52, 86, 18, 42, 77, 78, 23, 17, 55, 30, 43, 44, 39, 90, 15, 41, 40, 20, 30, 32, 65, 31, 73, 99, 14, 78, 27, 1, 82, 46, 26, 64, 100, 43, 30, 34, 96, 43, 9, 11, 72, 36, 38, 15, 96, 64, 16, 15, 61, 60, 39, 8, 81, 5, 31, 41, 35, 58, 76, 1, 17, 33, 1, 74, 15, 53, 27, 13, 4, 70, 77, 19, 5, 13, 79, 27, 13, 91, 84, 71, 48, 16, 99, 5, 67, 96, 76, 69, 61, 13, 32, 69, 88, 60, 29, 84, 94, 44, 65, 90, 24, 60, 11, 75, 15, 32, 32, 26, 45, 63, 60, 45, 78, 65, 2, 45, 56, 30, 50, 4, 94, 56, 25, 40, 48, 60, 50, 18, 43, 39, 46, 69, 73, 62, 84, 34, 82, 92, 10, 5, 55, 40, 31, 26, 64, 24, 70, 42, 47, 99, 2, 87, 46, 3, 31, 9, 77, 39, 86, 53, 13, 85, 57, 67, 98, 36, 89, 68, 15, 84, 4, 7, 25, 60, 15, 50, 62, 2, 69, 20, 36, 46, 49, 6, 14, 39, 43, 85, 7, 6, 60, 48, 17, 27, 61, 14, 80, 59, 12, 64, 72, 81, 69, 58, 40, 58, 48, 35, 43, 27, 9, 45, 61, 78, 60, 7, 15, 70, 73, 6, 17, 8, 13, 66, 43, 53, 37, 88, 12, 39, 25, 63, 7, 87, 73, 94, 96, 60, 78, 4, 35, 16, 61, 94, 81, 31, 55, 99, 87, 70, 96, 13, 97, 14, 16, 71, 71, 95, 81, 58, 39, 70, 42, 28, 85, 59, 1, 77, 50, 63, 33, 50, 28, 48, 19, 45, 33, 15, 97, 85, 5, 52, 36, 92, 8, 3, 65, 29, 50, 13, 70, 54, 92, 61, 81, 77, 36, 88, 44, 77, 48, 31, 20, 39, 93, 78, 61, 56, 89, 83, 37, 34, 32, 15, 74, 73, 83, 88, 22, 6, 62, 65, 28, 78, 62, 30, 64, 50, 2, 30, 1, 88, 84, 51, 35, 17, 29, 97, 17, 83, 29, 68, 26, 75, 89, 57, 87, 42], 405);