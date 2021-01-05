// https://leetcode-cn.com/problems/add-two-numbers/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let node1 = l1, node2 = l2;
    let result = new ListNode(0), prev = result;
    while (node1 != undefined || node2 != undefined || carry > 0) {
        const value1 = node1 != undefined ? node1.val : 0;
        const value2 = node2 != undefined ? node2.val : 0;
        const sum = value1 + value2 + carry;
        const list = new ListNode(sum % 10);
        prev.next = list;
        prev = list;
        carry = Math.floor(sum / 10);
        node1 = node1 != undefined ? node1.next : null;
        node2 = node2 != undefined ? node2.next : null;
    }
    return result.next;
};

function test1(input) {
    const l1 = arrayToList2(input[0]);
    const l2 = arrayToList2(input[1]);

    console.log(l1);
    console.log(l2);

    console.log(addTwoNumbers(l1, l2));
}

function arrayToList(array) {
    let list, prev;
    array.forEach(element => {
        const node = new ListNode(element);
        if (list == undefined) {
            list = node;
        }
        else {
            prev.next = node;
        }
        prev = node;
    });
    return list;
}

function arrayToList2(array) {
    let list = new ListNode(0);
    array.reduce((a, b) => {
        a.next = new ListNode(b);
        return a.next;
    }, list);
    return list.next;
}

input1 = [[2, 4, 3], [5, 6, 4]];
input2 = [[2, 4, 6], [5, 6, 5]];
input3 = [[2, 4, 6], [5, 6, 5, 3, 2, 1]];
input4 = [[2, 4, 6], [5, 6, 5, 9, 9, 9]];

test1(input1);
// test(input2);
// test(input3);
// test(input4);


// [2,4,3]
// [5,6,4]
// []
// []
// [2,4,3,9,9,9]
// [5,6,7]
// [2,4,5]
// [5,6,4,9,9,9]
// [2,4,3]
// [5,6,4,3,5,3]
// [2,4,3,1,8,3]
// [5,6,4]