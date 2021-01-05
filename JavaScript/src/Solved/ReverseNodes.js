// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
var List = require('../Common/List');
var Test = require('../Common/Test');
var ListNode = List.ListNode;

var reverseKGroup = function (head, k) {
    let length = 0;
    let node = head;
    while (node) {
        length++;
        node = node.next;
    }
    const root = new ListNode();
    root.next = head;
    node = head;
    let start = root, last, temp;
    for (let i = 0; i < Math.trunc(length / k); i++) {
        last = node;
        for (let j = 0; j < k; j++) {
            const next = node.next;
            node.next = temp;
            temp = node;
            node = next;
        }
        start.next = temp;
        last.next = node;
        start = last;
    }

    return root.next;
};

function test(head, k) {
    // Test.test(reverseKGroup, head, k);
    // Test.test(reverseKGroup, List.arrayToList(head), k);
    // const test = new Test.Test(reverseKGroup, List.arrayToList(head), k);
    // test.argsLogger = function (...args) {
    // console.log(args);
    // console.log(args[0]);

    // console.log(List.listToArray(args[0]));
    // console.log(args[1]);
    // }
    // test.do();
    // console.log();

    List.test(reverseKGroup, head, k);
}

// test([], 10);
test([1], 10);
// test([1, 2, 3], 2);
// test([1, 2, 3, 4, 5], 2);
test([1, 2, 3, 4, 5], 22);

// test([1, 2, 3, 4, 5], 5);
// test([...Array(10).keys()], 5);
test([...Array(10).keys()], 3);
// test([...Array(15).keys()], 5);