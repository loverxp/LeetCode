// https://leetcode-cn.com/problems/palindrome-linked-list/
var List = require('../Common/List');
var Test = require('../Common/Test');

var isPalindrome = function (head) {
    let length = 0;
    let node = head;
    while (node != null) {
        length++;
        node = node.next;
    }
    const isEven = length % 2 == 0;
    length = isEven ? length / 2 : (length - 1) / 2;

    let reversed = null;
    node = head;
    for (let i = 0; i < length; i++) {
        const next = node.next;
        node.next = reversed;
        reversed = node;
        node = next;
    }
    if (!isEven) {
        node = node.next;
    }
    while (reversed) {
        if (reversed.val != node.val) return false;
        reversed = reversed.next;
        node = node.next;
    }
    return true;
};

function test(head) {
    // Test.test(reverseKGroup, head, k);
    Test.test(isPalindrome, List.arrayToList(head));
    // List.test(isPalindrome, head);
}

test([]);
test([1]);
test([1,2,2]);
test([1,2,3]);
test([1, 2, 3, 2, 1]);
test([1,2,2,1]);
test([...Array(10).keys()]);