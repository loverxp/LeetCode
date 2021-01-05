// https://leetcode-cn.com/problems/couples-holding-hands/

var Test = require('../../Common/Test');
const { setOriginalNode } = require('typescript');

var minSwapsCouples = function (row) {
    let count = 0;
    for (let i = 0; i < row.length; i += 2) {
        console.log({ i });
        console.log(row);

        const first = row[i];
        const second = row[i + 1];
        const partner = first % 2 == 0 ? first + 1 : first - 1;

        if (second != partner) {
            for (let j = i + 2; j < row.length; j++) {
                if (row[j] == partner) {
                    const temp = row[j];
                    row[j] = second;
                    row[i + 1] = temp;
                    count++;
                }
            }
        }
    }
    return count;
};

function test(row) {
    Test.test(minSwapsCouples, row);
}

// test([0, 2, 1, 3]);
// test([3, 2, 0, 1]);
test([5, 4, 2, 6, 3, 1, 0, 7]);

// [0, 2, 1, 3]
// [3, 2, 0, 1]
// [5, 4, 2, 6, 3, 1, 0, 7]