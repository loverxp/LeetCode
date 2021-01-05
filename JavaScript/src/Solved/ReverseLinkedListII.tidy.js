// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
var List = require('../Common/List');
var Test = require('../Common/Test');
var ListNode = List.ListNode;

var reverseBetween = function (head, m, n) {
    const root = new List.ListNode();
    root.next = head;
    let current = head;
    let reversedStart = root;
    let reversedLast = null;
    let temp = null;
    let rest = null;
    let i = 0;
    while (current != null && i < n) {
        if (i++ < m - 1) {
            reversedStart = current;
            current = current.next;
        }
        else {
            if (!reversedLast) reversedLast = current;
            reversedStart.next = current;
            rest = current.next;
            current.next = temp;
            temp = current;
            current = rest;
        }
    }
    if (reversedLast) {
        reversedLast.next = rest;
    }
    return root.next;
};

function test(head, m, n) {
    console.log({ head });
    console.log({ m, n });
    const test = new Test.Test(reverseBetween, List.arrayToList(head), m, n);
    test.logArgs = false;
    test.resultLogger = function (result) {
        console.log(List.listToArray(result));
    }
    test.do();
}

// test([], 5,5);
// test([1], 5, 5);
test([...Array(10).keys()], 3, 7);
// test([...Array(10).keys()], 3, 5);
// test([...Array(10).keys()],3, 11);