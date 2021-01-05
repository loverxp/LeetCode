// https://leetcode-cn.com/problems/odd-even-jump/
var Test = require('../Common/Test');
var List = require('../Common/List');

var oddEvenJumps = function (nums) {
    const len = nums.length;
    nums.push(-Infinity);
    const dp = Array(len + 1).fill().map(_ => [false, false]);      //ODD,EVEN
    dp[len - 1] = [true, true];
    dp[len] = [false, false];

    let listHead = {
        val: len,
        next: {
            val: len - 1
        },
    };
    for (let i = len - 2; i >= 0; i--) {
        const num = nums[i];
        let node = listHead;
        let index1 = node.val;
        while (node.next && nums[node.next.val] < num) {
            if (nums[node.next.val] > nums[index1]) {
                index1 = node.next.val;
            }
            node = node.next;
        }
        const next = node.next;
        node.next = { val: i, next };

        const good = dp[i];
        if (next) {
            const index2 = next.val;
            if (nums[index2] > num) {
                good[1] = dp[index1][0];
            }
            else {  // ==
                good[1] = dp[index2][0];
            }
            good[0] = dp[index2][1];
        }
        else {
            good[1] = dp[index1][0];
        }
    }

    return dp.reduce((sum, [val]) => sum += val ? 1 : 0, 0);
};

function test(nums) {
    Test.test(oddEvenJumps, nums);
}

test([10, 13, 12, 14, 15]);
test([2, 3, 1, 1, 4]);
test([5, 1, 3, 4, 2]);
test([3, 2, 4, 5]);
test([1, 3, 2, 4, 5]);


// 3,   [1,2,4,5] 
// 3,   [1,2,3,4,5] 
// 7,   [1,2,3,4,5] 
// 1,   [2,3,4,5] 

//ODD,  big
//EVEN, small