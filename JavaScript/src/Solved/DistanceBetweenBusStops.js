// https://leetcode-cn.com/problems/distance-between-bus-stops/
var Test = require('../Common/Test');

var distanceBetweenBusStops = function (distance, start, destination) {
    const totalDistance = distance.reduce((a, b) => a + b);
    if (start > destination) {
        const temp = start;
        start = destination;
        destination = temp;
    }
    let clockwiseDistance = 0;
    for (let i = start; i < destination; i++) {
        clockwiseDistance += distance[i];
    }
    return Math.min(clockwiseDistance, totalDistance - clockwiseDistance);
};

function test(distance, start, destination) {
    Test.test(distanceBetweenBusStops, distance, start, destination);
}

// test([1, 2, 3, 4], 0, 1);
// test([1, 2, 3, 4], 0, 2);
// test([1, 2, 3, 4], 0, 3);

// test([1, 2, 3, 4,5,6,7], 0, 3);
// test([1, 2, 3, 4, 5, 6, 7], 3, 6);
// test([1, 2, 3, 4, 5, 6, 7], 2, 6);
test([1, 2, 3, 4, 5, 6, 7], 6, 2);