var List = require('../Common/List');
var ListNode = List.ListNode;

var insertionSortList = function (head) {
    let root = new ListNode();
    while (head) {
        let node = root;
        if (!node.next) {
            node.next = head;
            head = head.next;
            node.next.next = null;
        }
        else {
            while (node.next && head.val > node.next.val) {
                node = node.next;
            }
            const tmp = head;
            head = head.next;
            tmp.next = node.next;
            node.next = tmp;
        }
    }

    return root.next;
};

function test(array) {
    List.test(insertionSortList, array);
}

// test([4, 2, 1, 3]);
// test([2, 3, 5, 6, 1, 3]);
test([-1, 5, 3, 4, 0]);