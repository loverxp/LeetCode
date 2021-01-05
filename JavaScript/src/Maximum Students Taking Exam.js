// https://leetcode-cn.com/problems/maximum-students-taking-exam/
var Test = require('./Common/Test');

var maxStudents = function (seats) {

};

function run(seats) {
    Test.run(maxStudents, seats);
}

run([["#", ".", "#", "#", ".", "#"], [".", "#", "#", "#", "#", "."], ["#", ".", "#", "#", ".", "#"]])
run([[".", "#"], ["#", "#"], ["#", "."], ["#", "#"], [".", "#"]])
run([["#", ".", ".", ".", "#"], [".", "#", ".", "#", "."], [".", ".", "#", ".", "."], [".", "#", ".", "#", "."], ["#", ".", ".", ".", "#"]])


