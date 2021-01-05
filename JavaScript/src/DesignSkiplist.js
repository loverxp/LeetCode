// https://leetcode-cn.com/problems/design-skiplist/
var Test = require('./Common/Test');
var List = require('./Common/List');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var Skiplist = function () {
    this.levels = [];
    // this.root = new ListNode();
    this.count = 0;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {

    this.count++;

};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {

};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {

};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */


function test(ops, params) {
    Test.testWithInstructions(ops, params);
}

test(["Skiplist", "add", "add", "add", "search", "add", "search", "erase", "erase", "search"],
    [[], [1], [2], [3], [0], [4], [1], [0], [1], [1]]);

// ["Skiplist","add","add","add","search","add","search","erase","erase","search"]
// [[],[1],[2],[3],[0],[4],[1],[0],[1],[1]]
