// https://leetcode-cn.com/problems/longest-arithmetic-sequence/
var Test = require('./Common/Test');

var longestArithSeqLength = function (A) {

    console.log(A);
    for (let i = 0; i < A.length - 1; i++) {
        // const element = A[i];
        for (let j = 1; j < A.length; j++) {
            // const element = A[j];
            
            // for (let k = 0; k < A.length; k++) {
                // const element = A[k];
                
            // }
        }
        
    }
    
};

function test(A) {
    Test.test(longestArithSeqLength, A);
}

test([3, 6, 9, 12]);
// test([9, 4, 7, 2, 10]);
// test([20, 1, 15, 3, 10, 5, 8]);