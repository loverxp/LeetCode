// https://leetcode-cn.com/problems/stone-game/
var Test = require('./Common/Test');
var List = require('./Common/List');
// var { ListNode } = require('./Common/List');

var stoneGame = function (piles) {

    // arrayToList(piles);


    // const isFirst = true;

    return dfs(piles, [0, 0], true);

    function dfs(piles, scores, isAction) {
        if (piles.length == 0) {
            return scores[0] > scores[1];
        }
        else{



        }

    }
};

function test(piles) {
    Test.test(stoneGame, pile);
}

test([5, 3, 4, 5]);