// https://leetcode-cn.com/problems/cat-and-mouse/
var Test = require('./Common/Test');

var catMouseGame = function (graph) {

    let mouseMoves = new Set(graph[1]);
    let catMoves = new Set(graph[2]);
    // let steps = 0
    let moves = mouseMoves;
    let mouseTurn = true;
    // while ((let moves = steps % 2 == 0 ?mouseMoves:catMoves, mouseMoves.size : catMoves.size) {
    // while ((moves = steps % 2 == 0 ? mouseMoves : catMoves, moves.size)) {
    while (moves.size) {
        const moves2 = new Set();
        if (mouseTurn) {
            for (const move of moves) {
                moves2.add(...graph[move]);
            }
        }
        else {

        }
        mouseTurn = !mouseTurn;
    }
    switch (true) {
        // case mouseMoves.size == 0 && catMoves == 0: return 0;
        // case catMoves == 0: return 1;
        // case mouseMoves.size == 0: return 2;
    }

};

function run(graph) {
    Test.run(catMouseGame, graph);
}

run([[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]]);