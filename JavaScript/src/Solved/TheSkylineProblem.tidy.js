// https://leetcode-cn.com/problems/the-skyline-problem/
var Test = require('../Common/Test');

var getSkyline = function (buildings) {
    const skylines = [];
    const corners = [];
    const maxHeights = [];
    let maxHeight = 0;

    for (let i = 0; i < buildings.length; i++) {
        const building = buildings[i];
        height = building[2]
        corners.push({ pos: "L", x: building[0], height });
        corners.push({ pos: "R", x: building[1], height });
    }

    corners.sort((o1, o2) => {
        const pos1 = o1.pos.charCodeAt(0);
        const pos2 = o2.pos.charCodeAt(0);
        return o1.x - o2.x != 0 ? o1.x - o2.x
            : pos1 != pos2 ? pos1 - pos2
                : o1.pos == 'L' ? o2.height - o1.height
                    : o1.height - o2.height;
    });

    for (let i = 0; i < corners.length; i++) {
        const corner = corners[i];
        switch (corner.pos) {
            case 'L':
                if (corner.height > maxHeight) {
                    skylines.push([corner.x, corner.height]);
                }
                insertHeight(corner.height);
                break;
            case 'R': {
                removeHeight(corner.height);
                if (corner.height > maxHeight) {
                    skylines.push([corner.x, maxHeight]);
                }
                break;
            }
        }
    }
    return skylines;

    function insertHeight(height) {
        const i = maxHeights.findIndex(e => e < height);
        if (i == -1) {
            maxHeights.push(height);
        }
        else {
            maxHeights.splice(i, 0, height);
        }
        maxHeight = maxHeights[0];
    }

    function removeHeight(height) {
        const i = maxHeights.indexOf(height);
        maxHeights.splice(i, 1);
        maxHeight = maxHeights.length == 0 ? 0 : maxHeights[0];
    }

};

function test(buildings) {
    Test.test(getSkyline, buildings);
}

test([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]);
test([[0, 2, 3], [2, 5, 3]]);
test([[1, 2, 1], [1, 2, 2], [1, 2, 3]]);

// [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 0 ] ]
// [ [ 1, 3 ], [ 2, 2 ], [ 2, 1 ], [ 2, 0 ] ]