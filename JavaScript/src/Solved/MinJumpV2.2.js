// https://leetcode-cn.com/problems/zui-xiao-tiao-yue-ci-shu/
var Test = require('./Common/Test');

var minJump = function (jump) {
    const length = jump.length;
    // let steps = 0;
    let steps = 1;
    let i = 0;
    // const nextIndexes = [];

    // const nextIndexes = [jump[0]];

    let next1Index = 0;
    let next2Index = 0;
    let next3Index = 0;
    let nextIndex;

    do {
        nextIndex = i + jump[i];
        if (i < next1Index) {
            // next3Index = Math.max(next3Index, i + jump[i]);
            if (nextIndex >= length) {
                // return ++steps;
                // return steps + 2;
                return ++steps;
            }
            else {
                next3Index = Math.max(next3Index, nextIndex);
            }
        }
        else {  // i == next1Index
            // next2Index = nextIndex;
            // if (next2Index >= length) {
            ++steps;
            if (nextIndex >= length) {
                // return ++steps;
                return steps;
            }
            else {
                // nextIndex = jump[nextIndex];
                if (jump[nextIndex] >= length) {
                    // if (nextIndex >= length) {
                    // return steps + 2;
                    return ++steps;
                }
                else {
                    // next3Index = Math.max(next3Index, nextIndex);
                    // next3Index = Math.max(next3Index, jump[nextIndex]);
                    // next1Index = nextIndex;
                    if (jump[nextIndex] < next3Index) {
                        // i = next3Index

                    }
                    else {

                    }
                }
                // next1Index = next2Index;
                // next1Index = next2Index;
                // next3Index = Math.max(next3Index,)
            }
        }
        // next1Index = 

        // } while (++i < length && next1Index < length);
    } while (++i < length);

};

function test(jump) {
    Test.test(minJump, jump);
}

test([2, 5, 1, 1, 1, 1]);

// https://leetcode-cn.com/submissions/detail/88241815/testcase/

