// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
var List = require('../Common/List');
var Test = require('../Common/Test');

var reverseList = function (node) {
    let temp = null;
    while (node != null) {
        const next = node.next;
        node.next = temp;
        temp = node;
        node = next;
    }
    return temp;
};

function test(head) {
    // Test.test(reverseKGroup, head, k);
    // Test.test(reverseList, List.arrayToList(head));
    List.test(reverseList, head);
}

test([]);
test([1]);
test([...Array(10).keys()]);