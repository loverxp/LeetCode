// https://leetcode-cn.com/problems/parallel-courses-ii/
var Test = require('../Common/Test');

var minNumberOfSemesters = function (n, dependencies, k) {
    const courses = new Set(dependencies.flat());
    // const starts = new Set(dependencies.map(a => a[1]));
    const starts = new Set(courses);
    // console.log(starts);
    const predecessors = new Map();
    for (const [course1, course2] of dependencies) {
        if (!predecessors.has(course2)) {
            predecessors.set(course2, new Set());
        }
        predecessors.get(course2).add(course1);
        // starts.add(course2);
        starts.delete(course1);
    }
    const independenceSize = n - courses.size();
    return { courses, starts, predecessors };
};

function test(n, dependencies, k) {
    Test.test(minNumberOfSemesters, n, dependencies, k);
}

test(4, [[2, 1], [3, 1], [1, 4]], 2);
test(5, [[2, 1], [3, 1], [4, 1], [1, 5]], 2)
test(11, [], 2);