// https://leetcode-cn.com/problems/keys-and-rooms/
var Test = require('../Common/Test');

var canVisitAllRooms = function (rooms) {
    let keys = new Set(rooms[0]);
    const opened = new Set([0]);
    while (keys.size) {
        const newKeys = new Set();
        for (const key of keys) {
            opened.add(key);
        }
        for (const key of keys) {
            for (const room of rooms[key]) {
                if (!opened.has(room)) {
                    newKeys.add(room);
                }
            }
        }
        keys = newKeys;
    }
    return opened.size == rooms.length;
};

function test(rooms) {
    Test.test(canVisitAllRooms, rooms);
}

test([[1], [2], [3], []]);
test([[1, 3], [3, 0, 1], [2], [0]]);