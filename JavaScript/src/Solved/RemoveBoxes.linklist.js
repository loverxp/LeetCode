// https://leetcode-cn.com/problems/remove-boxes/
var Test = require('./Common/Test');

function ListNode(val, parent) {
    this.val = val;
    this.next = undefined;

    this.toString = () => {
        return `${this.val},${this.next ? this.next.toString() : '$'}`;
    }
}

function arrayToList(array) {
    let root = new ListNode();
    array.reduce((a, b) => {
        a.next = new ListNode(b);
        return a.next;
    }, root);
    return root;
}

var removeBoxes = function (boxes) {
    boxes = arrayToList(boxes);

    const map = new Map();
    return remove(boxes);

    function remove(boxes) {
        if (boxes.next) {
            const key = boxes.toString();
            if (!map.has(key)) {
                let max = 0;
                for (let i = boxes, j; i.next; i = j) {
                    const parent = i;
                    i = i.next;
                    j = i;
                    let k = 1;
                    while (j.next && i.val == j.next.val) {
                        j = j.next;
                        k++;
                    }
                    parent.next = j.next;
                    max = Math.max((k * k) + remove(boxes), max);
                    parent.next = i;
                }
                map.set(key, max);
            }
            return map.get(key);
        }
        return 0;
    }
}

function test(boxes) {
    Test.test(removeBoxes, boxes);
}

// test([1, 3, 2, 2, 2, 3, 4, 3, 1]);
// test([1, 3, 2, 2, 2, 3]);
// test([1, 3, 2]);
// test([1, 1, 1]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10, 7]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3 ]);
test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6]);
